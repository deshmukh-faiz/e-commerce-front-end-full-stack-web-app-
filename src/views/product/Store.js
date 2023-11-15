// src/store.js
import { createStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      // Check if the count is greater than 0 before decrementing
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
