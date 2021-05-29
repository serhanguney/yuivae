import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "../context/UserContext";
import useForm from "../hooks/useForm";
import { addPhrase } from "../services/firebase";

export default function dashboard() {
  const { currentUser } = useUserContext();
  const router = useRouter();

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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addPhrase(
        {
          phrase: values.phrase.content,
          time_stamp: new Date(),
        },
        currentUser.uid
      );
      console.log("post successful");
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [values]);
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
