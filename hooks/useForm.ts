import { useState, useRef } from "react";

type Errors = {
  [message: string]: string;
};
type Register = {
  name: string;
  type: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
};
type Value = {
  [field: string]: string;
};
export default function useForm() {
  const [values, setValues] = useState<Value>({});
  const [errors, setErrors] = useState<Errors>({});

  const requiredFields = useRef({});

  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    //keeps track of input values
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  function register({
    name,
    type,
    placeholder = "",
    error = "",
    autoComplete = "on",
  }: Register) {
    if (values[name] === undefined) {
      setValues((prev) => ({ ...prev, [name]: "" }));
    }
    //check if the field is required
    if (error !== "") {
      requiredFields.current = { ...requiredFields.current, [name]: error };
    }
    return {
      name,
      type,
      onChange: handleChange,
      placeholder,
      value: values[name],
      autoComplete,
    };
  }
  function validate() {
    let emptyFields = {};
    //checks if required fields are empty
    for (const [key, value] of Object.entries(values)) {
      if (value === "" && requiredFields.current[key] !== undefined) {
        emptyFields = { ...emptyFields, [key]: requiredFields.current[key] };
      }
    }
    if (Object.keys(emptyFields).length > 0) {
      setErrors(emptyFields);
      return false;
    }
    return true;
  }
  function reset() {
    setValues({});
    setErrors({});
  }
  return { values, errors, validate, register, setValues, reset };
}
