import { createContext, useContext } from "react";
import useAuthListener from "../hooks/useAuthListener";

const Context = createContext(null);
export const useUserContext = () => useContext(Context);
export default function UserContext({ children }) {
  const { currentUser } = useAuthListener();
  return (
    <Context.Provider value={{ currentUser }}>{children}</Context.Provider>
  );
}
