import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
import { useAuthContext } from "../context/FirebaseContext";

export default function dashboard() {
  const dashboardForm = {
    phrase: {
      type: "text",
      content: "",
      required: true,
      error: "Please enter your phrase to get your yuipass.",
      placeholder: "Please enter your phrase.",
    },
  };
  const { values, errors, handleChange, fieldsArray, validate } =
    useForm(dashboardForm);
  const { addPhrase } = useAuthContext();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addPhrase({
        phrase: values.phrase.content,
        time_stamp: new Date(),
      });
      console.log("post successful");
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => console.log(fieldsArray), [values]);
  return (
    <div>
      <form>
        {fieldsArray.map((field) => (
          <input
            key={field[0]}
            type={field[0]}
            name={field[0]}
            onChange={(e) => handleChange(e)}
            placeholder={field[1].placeholder}
          />
        ))}
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Post
        </button>
      </form>
    </div>
  );
}
