import { useSyncExternalStore } from "react";

type Subscribe = (onStoreChange: () => void) => () => void;
const subscribe: Subscribe = (onStoreChange) => {
  global.window?.addEventListener("scroll", onStoreChange);
  return () => global.window?.removeEventListener("scroll", onStoreChange);
};

function useScroll(selector = (id: number | undefined) => id) {
  return useSyncExternalStore(
    subscribe,
    () => selector(global.window?.scrollY),
    () => undefined
  );
}

export default useScroll;
