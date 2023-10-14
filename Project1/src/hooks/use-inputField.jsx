import { useState } from "react";

const useInputField = (validateInputField) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateInputField(value);
  const hasError = !isValid && isTouched;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetHandler,
  };
};

export default useInputField;