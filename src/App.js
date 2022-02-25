import React, { useState } from 'react';
import './App.css';
import AddItemForm from './Components/AddItemForm';
import Header from './Components/Header';
import CounterContext from './Context/counter-context';

function App() {

  //Handle context State: START
  const [items, setItems] = useState([
    { id:1, qty: 1 , name: 't-shirt', price: 4.99, discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic." }
  ]);


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
      {/* Add items listing eventually add  */}
      <AddItemForm />
    </CounterContext.Provider>
  );
}

export default App;
