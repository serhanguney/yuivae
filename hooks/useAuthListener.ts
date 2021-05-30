import { useEffect, useState } from "react";
import { useFirebaseContext } from "../context/FirebaseContext";

export default function useAuthListener() {
  const [currentUser, setCurrentUser] = useState(null);
  const { firebase } = useFirebaseContext();

  useEffect(() => {
    console.log("useAuthListener useEffect setting firebase");

    const unsubscribe =
      firebase &&
      firebase.auth().onAuthStateChanged((user) => setCurrentUser(user));

    return () => unsubscribe();
  }, []);
  console.log("useAuthListener rendered");
  return { currentUser };
}
