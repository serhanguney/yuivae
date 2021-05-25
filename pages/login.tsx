import useForm from "../hooks/useForm";
import { useAuthContext } from "../src/Context";

export default function login() {
  const formObject = {
    email: {
      content: "",
      error: "",
      required: true,
      type: "text",
      placeholder: "email",
    },
    password: {
      content: "",
      error: "",
      required: true,
      type: "password",
      placeholder: "password",
    },
  };
  const { values, handleChange, errors, fieldsArray } = useForm(formObject);
  const { login } = useAuthContext();

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      await login(values.email.content, values.password.content);
      console.log("youre logged in");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <form>
        {fieldsArray.map((field) => (
          <input
            key={field[0]}
            type={field[1].type}
            name={field[0]}
            onChange={(e) => handleChange(e)}
            placeholder={field[1].placeholder}
          />
        ))}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Log in
        </button>
      </form>
    </div>
  );
}
