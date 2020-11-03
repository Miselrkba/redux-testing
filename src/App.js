import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { DECREASE, INCREASE, RESET } from "./actions";
import reducer from "./reducers";
import { Provider } from "react-redux";

//setup initial state
const defaultState = {
  count: 0,
  name: "bob",
};

//setup store
const store = createStore(reducer, defaultState);


console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Counter  />
    </Provider>
  );
};

export default App;
