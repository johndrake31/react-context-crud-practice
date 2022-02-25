import React, { useState } from 'react';
import { useRef } from 'react';
import classes from './ItemListing.module.css';

const ItemListing = (props) => {
  const { qty, name, price, discription, id, onRemoveItem, onEditItem } = props;
  const [isEdit, setIsEdit] = useState(false);
  
  const nameRef = useRef(name)
  const discRef = useRef(discription)
  const qtyRef = useRef(qty)
  const priceRef = useRef(price)

  const removeItem = (id) => {
    return onRemoveItem(id);
  };
  const editItem = () => {
    const item = {
      id: id,
      name: nameRef.current.value, 
      discription: discRef.current.value, 
      qty: qtyRef.current.value, 
      price: priceRef.current.value,
    }
    setIsEdit(false);
    return onEditItem(item);
  };

  //item card
  const itemListing = (
    <li className={classes.itemBg + ' p-2 card mb-2 d-flex flex-row'}>
      <div className='card-body'>
        <div className={classes.name + ' card-title lead'}>{name}</div>
        <p className={classes.discription + ' card-text'}>{discription}</p>
        <div className={classes.qty + ' card-subtitle mb-2 '}>QTY: {qty}</div>
        <div className={classes.price + ' card-subtitle mb-2 '}>
          Price: {price} €
        </div>
        <div>
          <button
            onClick={() => {
              setIsEdit(true);
            }}
            className='btn btn-warning me-2'
          >
            Edit
          </button>
          <button
            onClick={() => {
              removeItem(id);
            }}
            className='btn btn-danger'
          >
            Remove
          </button>
        </div>
      </div>
      <img
        className={classes.img + ' img-fluid rounded-start '}
        src={
          'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
        alt='white skelton hand on black Tee'
      />
    </li>
  );

  const itemToEdit = (
    <li className={classes.itemBg + ' p-2 card mx-2 d-flex flex-row'}>
      <div className='row ps-3 me-2'>
        <div className='col-10 mb-2'>
          <label className='col-2 ' htmlFor='name'>
            Name:
          </label>
          <input ref={nameRef} className='col-6 rounded' name='name' defaultValue={name} />
        </div>
        <div className='col-10 mb-2 '>
          <label className='col-2 align-top' htmlFor='name'>
            Discription:
          </label>
          <textarea ref={discRef} className='col-6 rounded' defaultValue={discription} />
        </div>
        <div className='col-10 mb-2 '>
          <label className='col-2 ' htmlFor='name'>
            QTY
          </label>
          <input ref={qtyRef} className='col-6 rounded' defaultValue={qty} />
        </div>
        <div className='col-10 '>
          <label className='col-2 ' htmlFor='name'>
            Price
          </label>
          <input ref={priceRef} className='col-6 rounded' defaultValue={price} />
        </div>
        <button onClick={()=>{editItem(id)}} className='btn btn-secondary btn-block mt-2'>Update</button>
      </div>
      <img
        className={classes.img + ' img-fluid rounded-start '}
        src={
          'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        }
        alt='white skelton hand on black Tee'
      />
    </li>
  );

  return (
    <>
      {!isEdit && itemListing}
      {isEdit && itemToEdit}
    </>
  );
};

export default ItemListing;
