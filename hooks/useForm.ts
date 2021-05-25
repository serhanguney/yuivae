import { useState } from "react";

type IField = {
  content: string;
  error: string;
  required: boolean;
  placeholder?: string;
  type: string;
};
type FormObject = {
  [field: string]: IField;
};
type Errors = {
  [error: string]: string | boolean;
};

export default function useForm(formObject: FormObject) {
  const [values, setValues] = useState<FormObject>(formObject);
  const [errors, setErrors] = useState<Errors>();
  const fieldsArray = Object.entries(values);
  function handleChange(e: React.ChangeEvent<HTMLButtonElement>) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: { ...prev[e.target.name], content: e.target.value },
    }));
    // console.log(fieldsArray);
  }

  function validate() {
    const issues: { [key: string]: string | boolean } = {};

    for (const [key, value] of fieldsArray) {
      if (value.required && value.content === "") {
        issues[key] = value.error;
        issues.isNone = true;
      }
    }
    if (Object.entries(issues).length === 0) {
      issues.isNone = true;
    }
    setErrors(issues);
  }

  return { values, errors, handleChange, validate, fieldsArray };
}
