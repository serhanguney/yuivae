import { useState } from "react";

type Errors = {
  message: string;
  isRequired: boolean;
};
type Register = {
  name: string;
  type: string;
  placeholder?: string;
  error?: string;
  onChange?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
};
type Value = {
  [field: string]: string;
};
export default function useForm() {
  const [values, setValues] = useState<Value>({});
  const [errors, setErrors] = useState<Errors>();
  const fieldsArray = Object.keys(values);

  function handleChange(e: React.ChangeEvent<HTMLButtonElement>) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function register({
    name,
    type,
    placeholder = "",
    error = "",
    onChange,
  }: Register) {
    console.log("registered");
    setValues((prev) => ({ ...prev, [name]: "" }));
    if (error !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: { message: error, isRequired: false },
      }));
    }
    return { name, type, placeholder, onChange };
  }
  function validate() {
    for (const key of fieldsArray) {
      if (errors[key] && values[key] === "") {
        setErrors((prev) => ({
          ...prev,
          [key]: { ...errors[key], isRequired: true },
        }));
      }
    }
  }
  console.log("useForm rendered");
  return { values, errors, handleChange, validate, setValues, register };
}
