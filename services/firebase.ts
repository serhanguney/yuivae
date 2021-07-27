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
  return await userRef.set(
    {
      data: firebase.firestore.FieldValue.arrayUnion(body),
    },
    { merge: true }
  );
}
//anonymous adds poll
export async function addPoll(body) {
  const userRef = firebase.firestore().collection("polls");
  return await userRef.add(body);
}

//anonymous gets poll
// export async function getPoll(id) {
//   const userRef = firebase.firestore().collection("polls").doc(id);
//   return await userRef.get();
// }

//anonymous votes
export async function vote(id, optionNumber) {
  const pollRef = firebase.firestore().collection("polls").doc(id);
  const name = `answers.${optionNumber}.vote`;
  return await pollRef.update({
    [name]: firebase.firestore.FieldValue.increment(1),
  });
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
  return await userRef.set(
    {
      data: firebase.firestore.FieldValue.arrayUnion(body),
    },
    { merge: true }
  );
}
