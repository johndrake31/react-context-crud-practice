import React, { useState } from 'react';
import CounterContext from './Context/counter-context';
import { Route } from 'react-router-dom';
import './App.css';

import AddItemForm from './Components/AddItemForm';
import Header from './Components/Header';
import ItemListing from './Components/ItemListing';
import Home from './Components/Home';
import About from './Components/About';

function App() {

  //Handle context State: START
  const [formIsShown, setFormIsShown] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      qty: 1,
      name: 't-shirt',
      price: 4.99,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic."
    },
    {
      id: 2,
      qty: 1,
      name: 'batman t-shirt',
      price: 4.99,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic."
    },
    {
      id: 3,
      qty: 1,
      name: 'spiderman t-shirt',
      price: 4.99,
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic."
    }
  ]);

  const removeItemHandler = (id) => {
    const arrTemp = [...items];
    const newItemsArr = arrTemp.filter(item => {
      return item.id !== id;
    })
    setItems(() => {
      return newItemsArr
    })
  }

  const editItemHandler = (item) => {
    console.log(item);
    const index = items.map(function (x) { return x.id; }).indexOf(item.id);
    const newArr = [...items];
    newArr[index] = { ...item };
    setItems(() => {
      return [...newArr]
    })
  }

  const addItemHandler = (item) => {
    if (item.status === 'success') {
      const tempArr = [...items];
      tempArr.push(item);
      console.log(tempArr);
      setItems(() => {
        return tempArr;
      })
      setFormIsShown(false)
    }
    else if (item.status === 'error') {
      console.log(item.msg);
    }
  }
  //Handle context State: END

  //Mapping
  const itemsListing = items.map((item) => (
    <ItemListing
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      discription={item.discription}
      qty={item.qty}
      onRemoveItem={removeItemHandler}
      onEditItem={editItemHandler}
    />
  ))

  return (
    <CounterContext.Provider value={{ itemsArr: items, onAddItem: addItemHandler }}>

      <Header />
      <Route path="/products">
        {items && <div className='mt-3 px-5 d-flex flex-column'> <h2 className='text-center'>Inventory</h2><ul > {itemsListing} </ul> </div>
        }
        {!formIsShown && <div className='d-grid gap-* mx-5 mb-3'>
          <button onClick={() => { setFormIsShown(true) }} className='btn block btn-dark'>Add Item to Store</button>
        </div>}
        {formIsShown && <AddItemForm />}
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </CounterContext.Provider>
  );
}

export default App;
