import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../globalState/globalStateContext'

const Header = () => {
        const {cart, counter, setCounter} = useContext(GlobalStateContext)

       const cartCounter = () => {
        let count = 0;
        cart.forEach(product => {
            count += product.quantity
        })
        setCounter(count)
       }

        useEffect(()=>{
           cartCounter()
        }, [cart, counter])
    return (
        <div>
            <p>{counter}</p>
        </div>
    )
}

export default Header