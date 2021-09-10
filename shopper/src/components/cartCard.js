import React, {  useContext } from 'react'
import GlobalStateContext from '../globalState/globalStateContext'

const CartCard = (props) => {
    const {products, cart, setCart} = useContext(GlobalStateContext)

    const increaseQuantity = (productId) => {
        const inCart = cart.find(product => product.id === productId)
        if(inCart){
          const newCart = cart.map((product) => {
            if(productId === product.id){
                return{
                    ...product, quantity: product.quantity + 1
                }
            }
                return product
          })
            setCart(newCart)
        } else {
            const addingToCart = products[0].find(product => product.id === productId)
            const newProduct = [...cart, {...addingToCart, quantity: 1}]
            setCart(newProduct)
        }
    }

    const decreaseQuantity = (productID) => {
        const newProductInCart = cart.map((product) => {
            if(productID === product.id) {
                return {
                    ...product,
                    quantity: product.quantity -1
                }
            }
                return product
        })
            .filter((product) => product.quantity > 0);

            setCart(newProductInCart)
    }
    
    return (
        <div>
            <p>{props.name}</p>
            <p>R${props.price}</p>
            <p>Estoque: {props.stock}</p>   
            <p>Quantidade: {props.quantity}</p>
            <button onClick={() => increaseQuantity(props.id)}>Adicionar mais um</button>
            <button onClick={() => decreaseQuantity(props.id)}>Remove</button>    
        </div>
        
    )
}

export default CartCard