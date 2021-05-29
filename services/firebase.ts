import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//signup with firebase
export async function signUp(email: string, password: string) {
  return await firebase.auth().createUserWithEmailAndPassword(email, password);
}
//login with firebase
export async function login(email: string, password: string) {
  return await firebase.auth().signInWithEmailAndPassword(email, password);
}

type Body = {
  phrase: string;
  yuipass: string;
  time_stamp: Date;
};
//add password to database
export async function addPhrase(body: Body, currentUser: { uid: string }) {
  const userRef = firebase
    .firestore()
    .collection("users")
    .doc(`${currentUser.uid}`);
  return userRef.set(
    {
      data: firebase.firestore.FieldValue.arrayUnion(body),
    },
    { merge: true }
  );
}
export async function getAllYuipass() {
  const result = await firebase.firestore().collection("users").get();
  return result.docs.map((item) => ({ data: item.data(), docID: item.id }));
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
      data: firebase.firestore.FieldValue.arrayUnion(body),
    },
    { merge: true }
  );
}
