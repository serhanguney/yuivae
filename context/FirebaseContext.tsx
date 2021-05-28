import firebaseClient from "../lib/firebase";

import React, { useContext } from "react";

const Context = React.createContext(null);
export const useFirebaseContext = () => useContext(Context);

export default function FirebaseContext({
  children,
}: {
  children: React.ReactNode;
}) {
  //initialise firebase app here
  const firebase = firebaseClient();
  const value = { firebase };
  console.log("firebasecontext rendered");
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
