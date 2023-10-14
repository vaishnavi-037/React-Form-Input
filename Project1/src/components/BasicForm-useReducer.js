import useInputFieldReducer from "../hooks/use-inputField-useReducer";

const BasicFormWithReducer = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetHandler: firstNameResetHandler,
  } = useInputFieldReducer((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetHandler: lastNameResetHandler,
  } = useInputFieldReducer((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetHandler: emailResetHandler,
  } = useInputFieldReducer((value) => value.includes("@"));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    console.log(firstName);

    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
            type="text"
            id="name"
          />
          {firstNameHasError && (
            <p className="error-text">First Name cannot be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p className="error-text">Email must be valid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicFormWithReducer;
