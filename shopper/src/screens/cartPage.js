import React, { useContext, useEffect } from 'react'
import CartCard from '../components/cartCard'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCheckout } from '../router/coordinatior'
import { useHistory } from 'react-router'

const CartPage = () => {
  const {products, cart, setCart, checkout, setCheckout, totalPrice, setTotalPrice, totalItems, setTotalItems} = useContext(GlobalStateContext)
  const history = useHistory()

  const cartTotal = () => {
      let product = 0;
      let price = 0;
      
      cart.forEach((products) => {
          product += products.quantity;
          price += products.quantity * products.price
      })

      setTotalItems(product)
      setTotalPrice(price.toFixed(2))

  }

  const clearCart = () => {
    setCart([])
  }

  useEffect(() => {
      cartTotal()
  }, [cart, totalItems, totalPrice, setTotalPrice, setTotalItems])

  // products: state.products.map(product => product.id === payload.id ? {...product, qty_stock: product.qty_stock - 1} : product)

  const checkout1 = (productID) => {
    products.map(product => product.id === productID ? {...product, qty_stock: product.qty_stock - product.quantity} : product) 

    goToCheckout(history)
  }

  const checkOut2 = () => {
    setCheckout(cart)
    goToCheckout(history)
    console.log(checkout)
  }

    return( 
        <div>
          <button onClick={() => clearCart()}>Clear Cart</button>
            {cart.map((product) => {
    return (
      <CartCard
        id={product.id}
        name={product.name}
        price={product.price}
        stock={product.qty_stock}
        quantity={product.quantity}
      />
    )
  })}
      <p>Total: {totalPrice}</p>
      <p>Quantidade: {totalItems}</p>
      <button onClick={() => checkOut2()}>Ir para o Checkout</button>
        </div>
    )
}

export default CartPage