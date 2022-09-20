import { AnimatePresence } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";

import { revealParagraph } from "~/features/core/animations/constants";
import { AnimatedButton } from "~/features/ui/components/AnimatedButton";

import {
  YuiPassBody,
  YuiPassForm,
  YuiPassHash,
  YuiPassInput,
  YuiPassLayout,
  YuiPassTitle,
} from "./styles";

const YuiPass = () => {
  const [yuiPass, setYuiPass] = useState<{ value: string; hash: string }>({
    value: "",
    hash: "E2a4V2i0U8y_@2104",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isSubmitted) setIsSubmitted(false);

    setYuiPass((prevState) => ({ ...prevState, value: value.toLowerCase() }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <YuiPassLayout>
      <YuiPassTitle>YuiPass</YuiPassTitle>
      <YuiPassBody>
        Hi. This is where I’ve had to put a stop to{" "}
        <span>losing my passwords all the time.</span> <br />
        This very simple, and not secure algorithm is something I made for
        myself so that I can reflect my &quot;OCD&quot; to how I secure my
        personal accounts.
      </YuiPassBody>
      <YuiPassForm onSubmit={handleSubmit}>
        <YuiPassInput
          type="text"
          value={yuiPass.value}
          placeholder="enter any phrase"
          onChange={handleInput}
        />
        <AnimatedButton type="submit" isStatic={true}>
          GET YUIPASS
        </AnimatedButton>
      </YuiPassForm>
      <AnimatePresence>
        {isSubmitted && (
          <YuiPassHash
            initial={revealParagraph.initial}
            animate={revealParagraph.animate(0)}
            exit={revealParagraph.exit}
          >
            {yuiPass.hash}
          </YuiPassHash>
        )}
      </AnimatePresence>
    </YuiPassLayout>
  );
};

export { YuiPass };
