import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import productsJSON from '../products/products.json'

const GlobalState = (props) => {
    const products = useState(productsJSON)
    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [checkout, setCheckout] = useState([]);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

    const data = { products, cart, setCart, checkout, setCheckout, name, setName, date, setDate, counter, setCounter, totalPrice, setTotalPrice, totalItems, setTotalItems }

    return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>
}

export default GlobalState
