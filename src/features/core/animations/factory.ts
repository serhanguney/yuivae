//const primaryColumn = a.initial('height', '0').animate('height','100%').exit([['x',10],[opacity ,0],[filter: 'blur(10px)']])

// const primaryColumn = {
//   initial: { height: 0 },
//   animate: {},
//   exit: {},
// };

import { useDeprecatedAnimatedState } from "framer-motion";

type AnimationKeys = "initial" | "animate" | "exit";
type AnimatedProperties = "height" | "opacity" | "x" | "filter";

type Transition = {
  duration: number;
  ease: [number, number, number, number];
};

type AnimationContext = Array<[AnimatedProperties, string | number]>;
type TransitionContext = Array<
  [keyof Transition, Transition[keyof Transition]]
>;
type Context = TransitionContext | AnimationContext;

const animationMap = new Map();
animationMap.set("from", "initial");
animationMap.set("to", "animate");
animationMap.set("out", "exit");

class ProduceAnimation {
  [key: string]: object;

  private create(key: AnimationKeys, context: Context) {
    this[key] = Object.fromEntries(context);
  }

  from(context: AnimationContext) {
    this.create("initial", context);
    return this;
  }

  to(context: AnimationContext) {
    this.create("animate", context);
    return this;
  }

  out(context: AnimationContext) {
    this.create("exit", context);
    return this;
  }
  modify(key: "from" | "to" | "out", context: TransitionContext) {
    const adjustment = Object.fromEntries(context);
    const animationKey = animationMap.get(key);

    this[animationKey] = { ...this[animationKey], transition: adjustment };

    return this;
  }
}

export const animate = new ProduceAnimation();
