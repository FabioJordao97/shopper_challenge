import React, { useContext } from 'react'
import CheckoutCard from '../components/checkoutCard'
import GlobalStateContext from '../globalState/globalStateContext'

const CheckoutPage = () => {

    const { checkout, totalPrice, totalItems, name, date } = useContext(GlobalStateContext)

    const formatDate = new Date(date).toLocaleDateString('pt-br');
   
    return (
        <div>
            <p>{name}</p>
            <p>{formatDate}</p>
            {checkout.map((product) => {
                return (
                <CheckoutCard
                id={product.id}
                name={product.name}
                price={product.price}
                stock={product.qty_stock}
                quantity={product.quantity}
                />
            )})}
            <p>Total: R${totalPrice}</p>
            <p>Quantidade final: {totalItems}</p>
        </div>
    )
}

export default CheckoutPage