import useInput from "./hooks/use-input";
const BasicForm = (props) => {
  const {
    value: fName,
    valueIsValid: enteredfNameIsValid,
    hasError: fnameInputHasError,
    inputChangeHandler: fnameInputChangeHandler,
    inputBlurHandler: fnameInputBlurHandler,
    resetHandler: resetfNameInput,
    inputClasses: fnameinputClasses
  } = useInput((value) => value.trim() !== "");

  const {
    value: lName,
    valueIsValid: enteredlNameIsValid,
    hasError: lnameInputHasError,
    inputChangeHandler: lnameInputChangeHandler,
    inputBlurHandler: lnameInputBlurHandler,
    resetHandler: resetlNameInput,
    inputClasses: lnameinputClasses
  } = useInput((value) => value.trim() !== "");

  const {
    value: Email,
    valueIsValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    resetHandler: resetEmailInput,
    inputClasses: emailinputClasses
  } = useInput((value) => value.includes('@'));

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    resetfNameInput();
    resetlNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='control-group'>
        <div className={fnameinputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={fName} onChange={fnameInputChangeHandler} onBlur={fnameInputBlurHandler} />
          {fnameInputHasError && <p className="error-text">Please enter First Name.</p>}
        </div>
        <div className={lnameinputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lName} onChange={lnameInputChangeHandler} onBlur={lnameInputBlurHandler}/>
          {lnameInputHasError && <p className="error-text">Please enter Last Name.</p>}
        </div>
      </div>
      <div className={emailinputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='email' value={Email} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler}/>
        {emailInputHasError && <p className="error-text">Please enter valid Email Id.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!enteredfNameIsValid || !enteredlNameIsValid || !enteredEmailIsValid}
        >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
