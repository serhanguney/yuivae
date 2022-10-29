import { useSyncExternalStore } from "react";

type Subscribe = (onStoreChange: () => void) => () => void;
const subscribe: Subscribe = (onStoreChange) => {
  global.window?.addEventListener("resize", onStoreChange);
  return () => global.window?.removeEventListener("resize", onStoreChange);
};

function useResize(selector = (id: number | undefined) => id) {
  return useSyncExternalStore(
    subscribe,
    () => selector(global.window?.innerWidth),
    () => undefined
  );
}

export default useResize;
