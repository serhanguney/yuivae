import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styles from "../components/Layout/Layout.module.scss";

import Notification from "../components/Notification/Notification";
import Button from "../components/Button/Button";
import FormInput from "../components/Form/FormInput";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../components/Layout/Layout";
import Yuipass from "../helpers/yuipass";
import Description from "../components/Layout/Description";
import Check from "../SVGs/check";
import Copy from "../SVGs/Copy";
import IntroText from "../components/Layout/IntroText";
import Form from "../components/Form/Form";

import useForm from "../hooks/useForm";

export default function yuipass() {
  const { values, setValues, register, validate, reset } = useForm();
  const [isCopied, setIsCopied] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const password = new Yuipass(values.phrase as string);
      setValues((prev) => ({
        ...prev,
        yuipass: password.yuiPass,
      }));
    }
  }
  const description = {
    title: "How it works",
    list: [
      "Find a phrase, a simple word that you think could replace a password.",
      "Enter your phrase and get your yuipass. Yuipass is not case-sensitive.",
      "Copy your yuipass and use it as a password.",
      "You’ll always get the same yuipass for the same phrase.",
    ],
  };
  const introText = {
    title: "Replace passwords with Yuipass",
    paragraph:
      "Yuipass is an encrypted password created by a phrase that you think is awesome.",
  };
  const buttonStyle = {
    position: "absolute",
    right: "5%",
    top: "50%",
    transform: "translateY(-50%)",
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);
  return (
    <Layout>
      <Navbar />
      {isCopied && <Notification text="Yuipass is copied to clipboard" />}
      <Form>
        <IntroText title={introText.title} paragraph={introText.paragraph} />
        <div className={styles.fieldContainer}>
          <FormInput
            field={register({
              name: "phrase",
              type: "text",
              error: "phrase is required",
              autoComplete: "off",
            })}
            label="phrase"
          />
          <Button
            onClick={(e) => handleSubmit(e)}
            icon={<Check />}
            type={{ secondary: true }}
            disabled={values.phrase === ""}
            props={{ style: buttonStyle }}
          />
        </div>
        <div className={styles.fieldContainer}>
          <FormInput
            field={register({
              name: "yuipass",
              placeholder: "get your yuipass",
              type: "text",
              autoComplete: "off",
            })}
            disabled={true}
          />
          <CopyToClipboard
            text={values.yuipass}
            onCopy={() => setIsCopied(true)}
          >
            <Button
              onClick={(e) => e.preventDefault()}
              icon={<Copy />}
              type={{ secondary: true }}
              disabled={values.yuipass === ""}
              props={{ style: buttonStyle }}
            />
          </CopyToClipboard>
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
          type={{ primary: true }}
          text="Reset"
          disabled={values.yuipass === ""}
        />
      </Form>
      <Description array={description.list} title={description.title} />
    </Layout>
  );
}
