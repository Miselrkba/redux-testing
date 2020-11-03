import React, { useState } from "react";
import {createStore} from 'redux'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>counter component</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button className="btn" onClick={() => setCount(count - 1)}>
          decrease
        </button>
        <button className="btn" onClick={() => setCount(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setCount(count + 1)}>
          increase
        </button>
      </div>
    </div>
  );
}

export default Counter;
