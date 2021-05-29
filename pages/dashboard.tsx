import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import useForm from "../hooks/useForm";
import { addPhrase, getAllYuipass } from "../services/firebase";

export default function dashboard() {
  const { currentUser } = useUserContext();
  const [yuiPhrases, setYuiPhrases] = useState(null);

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
          phrase: "friend",
          yuipass: "friendyuipass_@",
          time_stamp: new Date(),
        },
        currentUser
      );
      console.log("post successful");
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    async function getData() {
      const result = await getAllYuipass();
      setYuiPhrases(result);
    }
    getData();
  }, []);
  useEffect(() => console.log(currentUser), [currentUser]);
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
      {yuiPhrases &&
        yuiPhrases[0].data.data.map((phrase) => (
          <p key={phrase.time_stamp}>{phrase.phrase}</p>
        ))}
    </div>
  );
}
