import { useEffect, useState } from "react";
import { useFirebaseContext } from "../context/FirebaseContext";
import { USER_LOCALSTORAGE } from "../constants";

export default function useAuthListener() {
  const [currentUser, setCurrentUser] = useState(null);
  const { firebase } = useFirebaseContext();
  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     setCurrentUser(localStorage.getItem(USER_LOCALSTORAGE));
  //   }
  // }, []);
  useEffect(() => {
    console.log("useAuthListener useEffect setting firebase");

    const unsubscribe = firebase
      .auth()
      .onAuthStateChanged((user) => setCurrentUser(user));
    return () => unsubscribe();
  }, []);
  console.log("useAuthListener rendered");
  return { currentUser };
}
