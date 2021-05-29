import { createContext, useContext, useEffect } from "react";
import useAuthListener from "../hooks/useAuthListener";

const Context = createContext(null);
export const useUserContext = () => useContext(Context);
export default function UserContext({ children }) {
  const { currentUser } = useAuthListener();

  useEffect(() => {
    console.log("UserContext useEffect");
  }, []);
  console.log("UserContext rendered");
  return (
    <Context.Provider value={{ currentUser }}>{children}</Context.Provider>
  );
}
