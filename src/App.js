import React, { useState } from "react";
import data from "./Data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const clickHandler = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    if (count < 1) setText(["select a valid number"]);
    else if (count > data.length)
      setText([
        "You have exceeded the maximum number of paragraphs, displaying all the existing paragraphs",
        ...data.slice(0, data.length),
      ]);
    else setText(data.slice(0, amount));
    setCount(0);
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setCount(event.target.value);
  };

  return (
    <React.Fragment>
      <section>
        <h3>tired of boring lorem ipsum</h3>
        <form>
          <label htmlFor="amount">paragraphs:</label>
          <input type="number" value={count} onChange={changeHandler} />
          <button onClick={clickHandler}>Generate</button>
        </form>
        <article>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </article>
      </section>
    </React.Fragment>
  );
};

export default App;
