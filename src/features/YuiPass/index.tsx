import { AnimatePresence } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { revealParagraph } from "~/features/core/animations/constants";
import { API_ROUTES } from "~/features/core/constants";
import useFetch from "~/features/hooks/useFetch";
import { Button } from "~/features/ui/components/Button/styles";
import Layout from "~/features/ui/components/Layout";
import Check from "~/features/ui/icons/Check";
import Copy from "~/features/ui/icons/Copy";

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
  const [yuiPass, setYuiPass] = useState<{
    value: string;
    hash: string;
  }>({
    value: "",
    hash: "",
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const { runFetch, status } = useFetch();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isSubmitted) {
      setIsSubmitted(false);
      setIsCopied(false);
    }

    setYuiPass((prevState) => ({ ...prevState, value: value.toLowerCase() }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!yuiPass.value || isSubmitted) return;
    setIsLoading(true);
    const result = await runFetch<{ yuiPass: string }>(API_ROUTES.YUIPASS, {
      method: "POST",
      body: yuiPass.value,
    });

    if (result === null) return;

    setYuiPass((prevState) => ({ ...prevState, hash: result.yuiPass }));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <Layout
      title="Yuipass"
      description="A password algorithm to hash your passwords."
    >
      <YuiPassLayout>
        <YuiPassTitle>
          Yui<span className="stroked">Pass</span>
        </YuiPassTitle>
        <YuiPassBody>
          Hi. This is where I had to put a stop to{" "}
          <span>losing my passwords all the time.</span> <br />
          This very simple, and not secure algorithm is something I made for
          myself so that I can reflect my &quot;OCD&quot; to how I secure my
          personal accounts. <br /> Its simple; every time you enter the same
          phrase it returns the same encrypted password.
        </YuiPassBody>
        <YuiPassForm onSubmit={handleSubmit}>
          <YuiPassInput
            type="text"
            value={yuiPass.value}
            placeholder="enter any phrase"
            onChange={handleInput}
          />
          <Button
            type="submit"
            style={{ width: "100%", maxWidth: "30rem" }}
            disabled={isLoading}
          >
            GET YUIPASS
          </Button>
        </YuiPassForm>
        <AnimatePresence>
          {isSubmitted && (
            <CopyToClipboard
              text={yuiPass.hash}
              onCopy={() => setIsCopied(true)}
            >
              <YuiPassHash
                initial={revealParagraph.initial}
                animate={revealParagraph.animate(0)}
                exit={revealParagraph.exit}
              >
                <span>{yuiPass.hash}</span>
                <Copy />
              </YuiPassHash>
            </CopyToClipboard>
          )}
        </AnimatePresence>
        {isCopied && (
          <Notification
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Check />
            Your YuiPass is copied
          </Notification>
        )}
        {status && (
          <Notification
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            $isError
          >
            {status.error}
          </Notification>
        )}
      </YuiPassLayout>
    </Layout>
  );
};

export { YuiPass };
