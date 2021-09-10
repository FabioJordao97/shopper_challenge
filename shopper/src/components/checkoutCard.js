import React from 'react'

const CheckoutCard = (props) => {
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