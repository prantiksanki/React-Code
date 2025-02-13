import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrement, reset } from '../features/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
