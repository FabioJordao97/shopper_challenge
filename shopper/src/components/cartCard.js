import React from 'react'

const CartCard = (props) => {
    return (
        <div>
             <p>{props.name}</p>
            <p>R${props.price}</p>
            <p>Estoque: {props.stock}</p>
        </div>
    )
}

export default CartCard