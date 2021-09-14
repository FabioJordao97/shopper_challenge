import React from 'react'
import { CheckoutProduct, ProductsCheckout } from '../styles/checkoutStyles'

const CheckoutCard = (props) => {
    return (
        <ProductsCheckout>
            <CheckoutProduct>{props.quantity}x - {props.name}</CheckoutProduct>
            <p>R${props.price}</p>            
        </ProductsCheckout>
    )
}

export default CheckoutCard