import React from 'react';
import classes from './ItemListing.module.css';

const ItemListing = (props) => {
  const { qty, name, price, discription } = props;
  return (
    <li className={classes.itemBg +' p-2 card mb-2 d-flex flex-row'}>
      <div className='card-body'>
        <div className={classes.name + ' card-title lead'}>{name}</div>
        <p className={classes.discription + ' card-text'}>{discription}</p>
        <div className={classes.qty + ' card-subtitle mb-2 '}>
          QTY: {qty}
        </div>
        <div className={classes.price + ' card-subtitle mb-2 '}>
          Price: {price} €
        </div>
        <div>
            <button className='btn btn-warning me-2'>Edit</button>
            <button className='btn btn-danger'>Remove</button>
        </div>
      </div>
      <img className={ classes.img+' img-fluid rounded-start '} src={"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="white skelton hand on black Tee" />
    </li>
  );
};

export default ItemListing;
