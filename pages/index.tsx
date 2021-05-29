import FormInput from "../components/FormInput/FormInput";
import Yuipass from "../helpers/yuipass";
import useForm from "../hooks/useForm";
import styles from "../styles/Home.module.css";
import register from "./register";

export default function Home() {
  const { handleChange, register, validate } = useForm();
  function handleSubmit(e) {
    e.preventDefault();
    validate();
    // const password = new Yuipass(values.phrase);
    // setValues((prev) => ({
    //   ...prev,
    //   yuipass: { ...prev.yuipass, content: password.yuiPass },
    // }));
  }
  console.log("index rendered");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Replace passwords with Yuipass</h1>
        <p>
          Yuipass is an encrypted password created by a phrase that you think is
          awesome.
        </p>
      </div>
      <form>
        <FormInput
          register={{
            ...register({
              name: "phrase",
              type: "text",
              onChange: (e) => handleChange(e),
            }),
          }}
        />
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          submit
        </button>
      </form>
      <div className={styles.howItWorks}>
        <h2>How it works</h2>
        <ul>
          <li>
            <span>1</span>Find a phrase, a simple word that you think could
            replace a password.
          </li>
          <li>
            <span>2</span>Enter your phrase and get your yuipass.
          </li>
          <li>
            <span>3</span>Copy your yuipass and use it as a password.
          </li>
          <li>
            <span>4</span>You’ll always get the same yuipass for the same
            phrase.
          </li>
        </ul>
      </div>
    </div>
  );
}
