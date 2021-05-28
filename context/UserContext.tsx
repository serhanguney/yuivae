import { createContext, useContext, useEffect } from "react";
import useAuthListener from "../hooks/useAuthListener";
import { useRouter } from "next/router";

const Context = createContext(null);
export const useUserContext = () => useContext(Context);
export default function UserContext({ children }) {
  const { currentUser } = useAuthListener();
  const router = useRouter();
  useEffect(() => {
    console.log("UserContext useEffect");
    if (!currentUser) {
      console.log("UserContext redirects");
      router.push("/");
    }
  }, [currentUser]);
  console.log("UserContext rendered");
  return <Context.Provider value={currentUser}>{children}</Context.Provider>;
}
