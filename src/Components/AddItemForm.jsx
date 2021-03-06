import React, { useContext, useRef } from 'react';
import CounterContext from '../Context/counter-context';
import classes from './AddItemForm.module.css';

const AddItemForm = () => {
  //{ amount: name: price:  discription: }
  const itemCtx = useContext(CounterContext);

  const inputName = useRef(null);
  const inputPrice = useRef(null);
  const inputQty = useRef(null);
  const inputDiscription = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      inputQty.current.value > 0 &&
      inputName.current.value !== '' &&
      inputPrice.current.value > 0 &&
      inputDiscription.current.value !== ''
    ) {
      return itemCtx.onAddItem({
        status: 'success',
        id: Math.ceil(Math.random() * 100 * Date.now()),
        qty: inputQty.current.value,
        name: inputName.current.value,
        price: inputPrice.current.value,
        discription: inputDiscription.current.value,
      });
    }
    else{
      return itemCtx.onAddItem({status: 'error', msg:"Form not valid. Make sure all fields are filled out" })
    }
  };

  return (
    <form
      className={classes.formBg + ' container  rounded mx-5 p-4 mb-5'}
      onSubmit={onSubmitHandler}
    >
      <h2>Add Item Form</h2>
      <div className='input-group input-group-sm mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-sm'>
          Name
        </span>
        <input
          ref={inputName}
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-sm'
        />
      </div>
      <div className='input-group input-group-sm mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-sm'>
          Price
        </span>
        <input
          ref={inputPrice}
          type='number'
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-sm'
        />
      </div>
      <div className='input-group input-group-sm mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-sm'>
          Quantity
        </span>
        <input
          ref={inputQty}
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-sm'
        />
      </div>
      <div className='input-group input-group-sm mb-3'>
        <span className='input-group-text' id='inputGroup-sizing-sm'>
          Discription
        </span>
        <textarea
          ref={inputDiscription}
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-sm'
        />
      </div>
      <hr />
      <button className='btn btn-block btn-primary'>Add Item</button>
    </form>
  );
};

export default AddItemForm;
