import { useState } from "react";

const useInput =(validateValue)=>{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = event => {
    setIsTouched(true);
  };

  const resetHandler = () => {
    setEnteredValue('');
    setIsTouched(false);
  }
  const inputClasses = hasError
  ? "form-control invalid"
  : "form-control";

return {
    value: enteredValue,
    valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetHandler,
    inputClasses
}

};

export default useInput;
