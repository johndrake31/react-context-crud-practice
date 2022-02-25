import React from 'react';

const CounterContext = React.createContext(
    {
        amount: 1 ,
        name: 't-shirt',
        price: 4.99,
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, hic.",
        onAddItem: (item)=>{}
    }
)
export default CounterContext