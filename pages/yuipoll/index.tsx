import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import uniqueId from "lodash/uniqueId";
import pageStyles from "../../styles/Yuipoll.module.scss";

import Description from "../../components/Layout/Description";
import IntroText from "../../components/Layout/IntroText";
import Layout from "../../components/Layout/Layout";
import FormInput from "../../components/Form/FormInput";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import Check from "../../SVGs/check";
import Button from "../../components/Button/Button";

import useForm from "../../hooks/useForm";
import { addPoll } from "../../services/firebase";

export default function yuipoll() {
  const [answers, setAnswers] = useState([
    { id: uniqueId("answer_"), name: 1, label: "Option 1" },
    { id: uniqueId("answer_"), name: 2, label: "Option 2" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  //create a poll object and send it to firebase
  //get the document id and redirect user to yuipoll/[id]

  const { values, register, unregister, validate, errors } = useForm();
  const introText = {
    title: "Create YuiPoll",
    paragraph:
      "YuiPolls are temporary polls you can use for evaluating many things. Need a voting? Create a poll.",
  };
  const description = {
    title: "How it works",
    list: [
      "Find a question you need answer to and fill in the form.",
      "You can set an expiry date, and a maximum number of votes.",
      "Set your password for when you need to close the poll.",
      "Once you set your question and answers you’re good to go.",
    ],
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();

    if (!isValid) {
      return;
    }
    setIsLoading(true);
    //format input values for the database
    let obj = { answers: {} };
    for (const [key, value] of Object.entries(values.answers)) {
      obj.answers = { ...obj.answers, [key]: { answer: value, vote: 0 } };
    }
    const body = {
      question: values.question,
      ...obj,
    };
    try {
      //add to database
      const result = await addPoll(body);
      console.log("post successful", result.id);
      //redirect user to poll
      router.push(`/yuipoll/${result.id}`);
    } catch (err) {
      console.log("post unsuccessful", err);
      setIsLoading(false);
    }
  }
  function addField(e) {
    e.preventDefault();
    setAnswers((prev) => [
      ...prev,
      {
        id: uniqueId("answer_"),
        name: prev.length + 1,
        label: `Option ${prev.length + 1}`,
      },
    ]);
  }
  function removeField(e) {
    e.preventDefault();
    const updatedAnswers = answers.filter((item) => item.name != e.target.name);
    //to overcome the shallow copy issue (immutable state)
    const newAnswers = JSON.parse(JSON.stringify(updatedAnswers));
    newAnswers.forEach((item, index) => {
      item.name = index + 1;
      item.label = `Option ${index + 1}`;
    });
    setAnswers(newAnswers);
    unregister({ answers: e.target.name });
  }
  useEffect(() => console.log(errors), [errors]);
  return (
    <Layout>
      <Navbar />
      <Form>
        <IntroText title={introText.title} paragraph={introText.paragraph} />
        {errors && (
          <p className={pageStyles.error}>
            Please check if all fields are filled.
          </p>
        )}
        <div className={pageStyles.fieldContainer}>
          <FormInput
            field={register({
              name: "question",
              error: "Question can not be empty",
              type: "text",
            })}
            label="Question"
          />
        </div>
        <div className={pageStyles.answersContainer}>
          {answers.map((item) => (
            <div className={pageStyles.fieldContainer} key={item.id}>
              <FormInput
                field={register({
                  name: { answers: item.name.toString() },
                  error: "Answers can not be empty",
                  type: "text",
                })}
                label={item.label}
              />
              <Button
                text="x"
                type={{ tertiary: true }}
                onClick={(e) => removeField(e)}
                props={{ name: item.name }}
              />
            </div>
          ))}
        </div>
        <div className={pageStyles.modifications}>
          {/* <Button icon={<Check />} type={{ tertiary: true }} /> */}
          {/* <Button icon={<Check />} type={{ tertiary: true }} /> */}
          <div className={`${pageStyles.addField} center`}>
            <span>Add field</span>
            <Button
              icon={<Check />}
              type={{ secondary: true }}
              onClick={(e) => addField(e)}
            />
          </div>
        </div>
        <Button
          type={{ primary: true }}
          onClick={(e) => handleSubmit(e)}
          props={{ style: { marginTop: "auto" } }}
          text="Go to Yuipoll"
        />
      </Form>
      <Description array={description.list} title={description.title} />
    </Layout>
  );
}
