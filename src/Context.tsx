import firebaseClient from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

interface Context {
  currentUser: { uid: string };
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
  signUp: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  login: (
    email: string,
    password: string
  ) => Promise<firebase.auth.UserCredential>;
  addPhrase: (body: { phrase: string; time_stamp: Date }) => Promise<void>;
}
interface User {
  uid: string;
}
const AuthContext = React.createContext<Partial<Context>>({});
export const useAuthContext = () => useContext(AuthContext);

export default function Context({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  //initialise firebase app here
  firebaseClient();

  //signup with firebase
  function signUp(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  //login with firebase
  function login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  function addPhrase(body: { phrase: string; time_stamp: Date }) {
    const userRef = firebase
      .firestore()
      .collection("users")
      .doc(`${currentUser.uid}`);
    return userRef.set(
      {
        lastUpdated: body.time_stamp,
        phrase: firebase.firestore.FieldValue.arrayUnion(body.phrase),
      },
      { merge: true }
    );
  }
  function removePhrase(body: { phrase: string; time_stamp: Date }) {
    const userRef = firebase
      .firestore()
      .collection("users")
      .doc(`${currentUser.uid}`);
    return userRef.set(
      {
        lastUpdated: body.time_stamp,
        phrase: firebase.firestore.FieldValue.arrayRemove(body.phrase),
      },
      { merge: true }
    );
  }

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);
  useEffect(() => console.log(currentUser), [currentUser]);
  const value = { currentUser, signUp, login, addPhrase };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
