import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//signup with firebase
export async function signUp(email: string, password: string) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
//login with firebase
export async function login(email: string, password: string) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

//add password to database
export async function addPhrase(
  body: { phrase: string; time_stamp: Date },
  currentUser: { uid: string }
) {
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

export async function removePhrase(
  body: { phrase: string; time_stamp: Date },
  currentUser: { uid: string }
) {
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
