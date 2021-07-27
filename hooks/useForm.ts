import { useState, useRef } from "react";
type Errors = {
  [message: string]: string;
};
type Register = {
  name: string | { [name: string]: string };
  type: string;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
};
type Value = {
  [field: string]: string | { [field: string]: string };
};
export default function useForm() {
  const [values, setValues] = useState<Value>({});
  const [errors, setErrors] = useState<Errors>(null);

  const requiredFields = useRef({});
  const nestedValues = useRef({});

  const handleChange = (e: React.ChangeEvent<HTMLButtonElement>) => {
    //if target name is a nested object '-'
    if (e.target.name.includes("-")) {
      const valueName = e.target.name.split("-")[0];
      const valueNameNumber = e.target.name.split("-")[1];
      setValues((prev) => ({
        ...prev,
        [valueName]: {
          ...(prev[valueName] as {}),
          [valueNameNumber]: e.target.value,
        },
      }));
    } else {
      //keeps track of input values
      setValues((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  function register({
    name,
    type,
    placeholder = "",
    error = "",
    autoComplete = "on",
  }: Register) {
    //if name is a string
    if (typeof name === "string") {
      //register the field if not already
      if (values[name] === undefined)
        setValues((prev) => ({ ...prev, [name]: "" }));
      //check if the field is required and if so register
      if (error !== "") {
        requiredFields.current = {
          ...requiredFields.current,
          [name]: error,
        };
      }

      return {
        name: name,
        type,
        onChange: handleChange,
        placeholder,
        value: values[name],
        autoComplete,
      };
    } else {
      //if name is an object we need to separate its key and value
      const nameKey: string = Object.keys(name)[0]; //namekey = "answer"
      // console.log("key", key, values[key]);
      const nameValue = name[nameKey]; // namevalue= 1
      //register the field if not already
      if (values[nameKey] === undefined) {
        // console.log("values[key] undefined", values[nameKey], nameValue);
        /*
        PROBLEM IS HERE: JSX runs before setState, for some reason useEffect is not triggered as much as this function is called.
        MAYBE FIXED BY nestedValues -- FAILED
        CANNOT separate the fields of the nested objects;
        i.e: 
        answer: {1: "", 2:"" , test: ""}
        reply: {1: "", 2: "" , test: ""}

        PROBLEM MAY BE FIXED BUT
        What if this function is called 6 times on inital, then it will setValues 6 times -> a lot of renders ?
        */
        nestedValues.current[nameKey] = {
          ...nestedValues.current[nameKey],
          [nameValue]: "",
        };

        Object.keys(nestedValues.current).forEach((key) =>
          setValues((prev) => ({ ...prev, [key]: nestedValues.current[key] }))
        );

        //OLD WAY
        // nestedValues.current[nameValue] = "";
        // setValues((prev) => ({ ...prev, [nameKey]: nestedValues.current }));
      }

      /* ERROR VALIDATION needs an update */
      //check if the field is required and if so register
      if (error !== "") {
        requiredFields.current = {
          ...requiredFields.current,
          [nameKey]: error,
        };
      }
      return {
        name: nameKey + "-" + nameValue,
        type,
        onChange: handleChange,
        placeholder,
        value: values[nameValue],
        autoComplete,
      };
    }
  }
  function unregister(name: string | { [key: string]: string }) {
    let newValues = {};
    if (typeof name === "string") {
      for (const [key, value] of Object.entries(values)) {
        if (key != name) {
          newValues[key] = value;
        }
      }
      setValues(newValues);
    } else {
      const nameKey = Object.keys(name)[0];
      const nameValue = Object.values(name)[0];
      for (const [key, value] of Object.entries(values[nameKey])) {
        if (key != nameValue) {
          newValues[key] = value;
        }
      }
      setValues((prev) => ({
        ...prev,
        [nameKey]: newValues,
      }));
    }
  }
  function validate() {
    let emptyFields = {};
    //checks if required fields are empty
    for (const [key, value] of Object.entries(values)) {
      //check if its nested value if not then its a string and go through with normal validation
      if (typeof value === "string") {
        if (value === "" && requiredFields.current[key] !== undefined) {
          emptyFields = { ...emptyFields, [key]: requiredFields.current[key] };
        }
      } else {
        //otherwise we need to take the values of the nested object and see if they are empty and required
        //note that the required necessity can not be for one, it can only be for all
        let isEmpty = false;
        Object.values(value).forEach((input) => {
          if (input === "" && requiredFields.current[key] !== undefined)
            isEmpty = true;
        });
        if (isEmpty) {
          //if they are required and empty, then set the error object
          emptyFields = { ...emptyFields, [key]: requiredFields.current[key] };
        }
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

  return { values, setValues, errors, validate, register, unregister, reset };
}
