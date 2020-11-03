import React, { useState } from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET } from "./actions";

function Counter(props) {
  console.log(props);

  const [count, setCount] = useState(34);

  return (
    <div className="container">
      <h1>counter component</h1>
      <h2>{props.name}</h2>
      <p className="counter">{props.count}</p>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => props.dispatch({ type: DECREASE })}
        >
          decrease
        </button>
        <button className="btn" onClick={() => props.dispatch({ type: RESET })}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => props.dispatch({ type: INCREASE })}
        >
          increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(`map state to props log ${state}`);
  return { count: state.count, otherName: state.name };
}

export default connect(mapStateToProps)(Counter);
