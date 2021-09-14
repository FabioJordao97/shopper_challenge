import React, { useContext, useEffect } from 'react'
import CartCard from '../components/cartCard'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCheckout } from '../router/coordinatior'
import { useHistory } from 'react-router'
import Header from '../components/header'
import Footer from '../components/footer'
import { CartFooterDiv, EmptyCart } from '../styles/footerStyles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { CartButton, CartFull, CartInput, CartTotal, DeleteDiv, Form } from '../styles/cartStyles'
import { CartDiv } from '../styles/cartStyles'

const CartPage = () => {
  const { name, setName, date, setDate, cart, setCart, checkout, setCheckout, totalPrice, setTotalPrice, totalItems, setTotalItems, setCounter } = useContext(GlobalStateContext)
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

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const finishPurchase = () => {
    if (name === '') {
      window.alert('Preencha os valores requisitados')
    } else if (date === '') {
      window.alert('Preencha os valores requisitados')
    } else {
      setCheckout(cart)
      goToCheckout(history)
      console.log(checkout)
      setCounter(0)
    }

  }

  return (
    <CartFull>
      <Header />
      <DeleteDiv>
        <span onClick={() => clearCart()}>Limpar</span>
        <DeleteForeverIcon onClick={() => clearCart()}></DeleteForeverIcon>
      </DeleteDiv>

      {cart.length === 0 ?

        <EmptyCart>Carrinho vazio</EmptyCart>

        :
        <CartDiv>
          <h2>Preencha com seus dados para finalizar o seu pedido!</h2>
          <Form>
            <CartInput
              placeholder="Qual o seu nome?"
              type="name"
              required
              name="name"
              value={name}
              onChange={onChangeName}
            />

            <CartInput
              placeholder="Coloque a data de entrega"
              type="date"
              required
              name="date"
              min={todayDate}
              value={date}
              onChange={onChangeDate}
            />
          </Form>

          <div>
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
          </div>
          <CartTotal>
          <p>Total: R${totalPrice}</p>
          <p>Nº de produtos: {totalItems}</p>
          <CartButton onClick={() => finishPurchase()}>Finalizar compra</CartButton>
          </CartTotal>
        </CartDiv>
      }
      <CartFooterDiv>
        <Footer />
      </CartFooterDiv>

    </CartFull>

  )
}

export default CartPage