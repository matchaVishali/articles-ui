import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App(props) {
  const [disable, setDisable] = useState(true);
  const [state, setState] = useState({ author: "" });
  const handleChange = (e) => {
    setDisable(false);
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("insdie submit");
    console.log(props);
 
    props.history.push({
      pathname: "/articles",
      search: new URLSearchParams({ authorName: state.author }).toString(),
    });
   
    
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Author Name:
          <input
            type="text"
            value={state.author}
            name="author"
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Fetch" disabled={disable} />
      </form>
    </div>
  );
}

export default App;
