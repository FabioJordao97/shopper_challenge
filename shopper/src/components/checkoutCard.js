import React, { useContext } from 'react'
import GlobalStateContext from '../globalState/globalStateContext'

const CheckoutCard = (props) => {

    const {name, date} = useContext(GlobalStateContext)
    return (
        <div>
            <p>{props.name}</p>
            <p>R${props.price}</p>
            <p>Estoque: {props.stock}</p>   
            <p>Quantidade: {props.quantity}</p>
        </div>
    )
}

export default CheckoutCard