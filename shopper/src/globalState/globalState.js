import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import productsJSON from '../products/products.json'

const GlobalState = (props) => {
    const products = useState(productsJSON)
    const [cart, setCart] = useState([])

    const data = { products, cart, setCart }

    return <GlobalStateContext.Provider value={data}>{props.children}</GlobalStateContext.Provider>
}

export default GlobalState
