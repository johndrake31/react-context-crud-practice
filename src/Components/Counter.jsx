import React from 'react';
import { useContext } from 'react';
import CounterContext from '../Context/counter-context';
const Counter = () => {
  const countCtx = useContext(CounterContext);
  return (
    <div className='d-flex flex-column-reverse me-5'>
      <button
      className='btn btn-danger'
        onClick={() => {
          countCtx.onChangeCount(-1);
        }}
      >
        -
      </button>
      <button
        className='btn btn-success'
        onClick={() => {
          countCtx.onChangeCount(1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
