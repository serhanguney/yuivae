import Button from "../components/Button/Button";
import FormInput from "../components/FormInput/FormInput";
import Navbar from "../components/Navbar/Navbar";
import Yuipass from "../helpers/yuipass";
import useForm from "../hooks/useForm";
import styles from "../styles/Home.module.scss";
import Check from "../SVGs/check";
import Copy from "../SVGs/Copy";
import Refresh from "../SVGs/Refresh";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Home() {
  const { values, setValues, register, validate, reset } = useForm();
  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const password = new Yuipass(values.phrase);
      setValues((prev) => ({
        ...prev,
        yuipass: password.yuiPass,
      }));
    }
  }
  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Replace passwords with Yuipass</h1>
        <p className={styles.paragraph}>
          Yuipass is an encrypted password created by a phrase that you think is
          awesome.
        </p>
      </div>
      <form className={styles.form}>
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
            disabled={values.phrase === ""}
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
            onCopy={() => console.log("copied", values.yuipass)}
          >
            <Button
              onClick={(e) => e.preventDefault()}
              icon={<Copy />}
              disabled={values.yuipass === ""}
            />
          </CopyToClipboard>
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault();
            reset();
          }}
          text="Clear"
          icon={<Refresh />}
          disabled={values.yuipass === ""}
        />
      </form>
      <div className={styles.howItWorks}>
        <h2 className={styles.secondaryTitle}>How it works</h2>
        <ul className={styles.list}>
          <li className={styles.container}>
            <span>1</span>
            <p>
              Find a phrase, a simple word that you think could replace a
              password.
            </p>
          </li>
          <li className={styles.container}>
            <span>2</span>
            <p>
              Enter your phrase and get your yuipass. Yuipass is not
              case-sensitive.
            </p>
          </li>
          <li className={styles.container}>
            <span>3</span>
            <p>Copy your yuipass and use it as a password.</p>
          </li>
          <li className={styles.container}>
            <span>4</span>
            <p>You’ll always get the same yuipass for the same phrase.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
