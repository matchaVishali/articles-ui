import { useState } from "react";

function Password() {
  const [disable, setDisable] = useState(true);
  const [state, setState] = useState({ password: "" });
  let [errorMessage, setErrorMessage] = useState(0);
    
  const handleChange = (e) => {
    setDisable(false);
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
   };  

  const validate = (value) => {
    let count = 0;
    const digit = /[0-9]/;
    const digitsMatching = value.match(digit);
    const lowerCase = /[a-z]/;
    const lowerCaseMatching = value.match(lowerCase);
    const upperCase = /[A-Z]/;
    const upperCaseMatching = value.match(upperCase);
    const specialCharaters = /!@#$%^&*()-+/;
    const specialMatching = value.match(specialCharaters);

    console.log(value.match(digit));
    if (!digitsMatching) {
      count++
    }
    if (!lowerCaseMatching) {
      count++;
    }
    if (!upperCaseMatching) {
      count++;
    }
    if (!specialMatching) {
     count++;
    }
    if (count + value.length < 6) {
      count = count + 6 - (count + value.length);
    }
    setErrorMessage(count);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = state.password;
    validate(password);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input
            type="text"
            value={state.author}
            name="password"
            onChange={handleChange}
          />
        </label>
        <br />
        {errorMessage ? <span style={{ fontWeight: "bold", color: "red" }}>{errorMessage}</span> : null}<br/>
        <input type="submit" value="Check" disabled={disable} />
      </form>
    </div>
  );
}

export default Password;
