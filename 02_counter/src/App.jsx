import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("Clicked", counter, Date.now());
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("Clicked", counter, Date.now());
  };

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter value: {counter}</h2>

      <button disabled={counter == 20} onClick={addValue}>
        Add value {counter}
      </button>
      <br />
      <button disabled={counter == 0} onClick={removeValue}>
        Remove value {counter}
      </button>
    </>
  );
}

export default App;
