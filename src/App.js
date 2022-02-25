import React, { useState } from 'react';
import './App.css';
import AddItemForm from './Components/AddItemForm';
import Header from './Components/Header';
import ItemListing from './Components/ItemListing';
import CounterContext from './Context/counter-context';

function App() {

  //Handle context State: START
  const [items, setItems] = useState([
    { 
      id:1, 
      qty: 1 , 
      name: 't-shirt', 
      price: 4.99, 
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic." 
    },
    { 
      id:2, 
      qty: 1 , 
      name: 'batman t-shirt', 
      price: 4.99, 
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic." 
    },
    { 
      id:3, 
      qty: 1 , 
      name: 'spiderman t-shirt', 
      price: 4.99, 
      discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic." 
    }
  ]);

  const itemsListing = items.map((item)=>(
    <ItemListing 
    key={item.id}
    name={item.name}
    price={item.price}
    discription={item.discription}
    qty={item.qty}
    />
  ))

  const addItemHandler = (item) => {
    const tempArr = [...items];
    tempArr.push(item);
    console.log(tempArr);
    setItems(()=>{
      return tempArr;
    })
  }
  //Handle context State: END

  return (
    <CounterContext.Provider value={{itemsArr: items, onAddItem: addItemHandler}}>
      <Header />
      {items && <ul className='p-5'> {itemsListing} </ul>}
      <AddItemForm />
    </CounterContext.Provider>
  );
}

export default App;
