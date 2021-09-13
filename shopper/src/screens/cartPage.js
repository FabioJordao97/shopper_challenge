import React, { useContext, useEffect } from 'react'
import CartCard from '../components/cartCard'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCheckout } from '../router/coordinatior'
import { useHistory } from 'react-router'

const CartPage = () => {
  const { products, name, setName, date, setDate, cart, setCart, checkout, setCheckout, totalPrice, setTotalPrice, totalItems, setTotalItems } = useContext(GlobalStateContext)
  let todayDate = new Date().toISOString().slice(0, 10)
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
    products.map(product => product.id === productID ? { ...product, qty_stock: product.qty_stock - product.quantity } : product)

    goToCheckout(history)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const checkOut2 = () => {
    if (name.length === 0) {
      window.alert('Preencha os valores requisitados')
    } else if (date.length === 0) {
      window.alert('Preencha os valores requisitados')
    } else {
      setCheckout(cart)
      goToCheckout(history)
      console.log(checkout)
    }

  }
  console.log(todayDate)
  console.log(name)
  console.log(date)


  return (
    <div>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <form onSubmit={checkOut2}>
        <input
          placeholder="Qual o seu nome?"
          type="name"
          required
          name="name"
          value={name}
          onChange={onChangeName}
        />

        <input
          placeholder="Coloque a data de entrega"
          type="date"
          required
          name="date"
          min={todayDate}
          value={date}
          onChange={onChangeDate}
        />
      </form>
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