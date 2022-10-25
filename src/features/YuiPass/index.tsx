import { AnimatePresence } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";

import { revealParagraph } from "~/features/core/animations/constants";
import { Button } from "~/features/ui/components/Button/styles";
import Check from "~/features/ui/icons/Check";
import Copy from "~/features/ui/icons/Copy";
import Yuipass from "~/features/YuiPass/yuipass";

import {
  Notification,
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
    hash: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isSubmitted) {
      setIsSubmitted(false);
      setIsCopied(false);
    }

    setYuiPass((prevState) => ({ ...prevState, value: value.toLowerCase() }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!yuiPass.value) return;
    const password = new Yuipass(yuiPass.value);
    setYuiPass((prevState) => ({ ...prevState, hash: password.yuiPass }));
    setIsSubmitted(true);
  };

  const copyHash = async () => {
    try {
      await navigator.clipboard.writeText(yuiPass.hash);
      setIsCopied(true);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <YuiPassLayout>
      <YuiPassTitle>
        Yui<span className="stroked">Pass</span>
      </YuiPassTitle>
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
        <Button type="submit">GET YUIPASS</Button>
      </YuiPassForm>
      <AnimatePresence>
        {isSubmitted && (
          <YuiPassHash
            initial={revealParagraph.initial}
            animate={revealParagraph.animate(0)}
            exit={revealParagraph.exit}
            onClick={copyHash}
          >
            {yuiPass.hash}
            <Copy />
          </YuiPassHash>
        )}
      </AnimatePresence>
      {isCopied && (
        <Notification
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Check />
          Your YuiPass is copied
        </Notification>
      )}
    </YuiPassLayout>
  );
};

export { YuiPass };
