import React, {  useContext } from 'react'
import GlobalStateContext from '../globalState/globalStateContext'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { AdjustQuantityDiv, CartPrice, ProductCart } from '../styles/cartStyles';

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
        <ProductCart>
            <p>{props.quantity}x - {props.name}</p>
            <AdjustQuantityDiv>
            <AddIcon color='primary' onClick={() => increaseQuantity(props.id)}></AddIcon>            
            <RemoveIcon color='secondary' onClick={() => decreaseQuantity(props.id)}></RemoveIcon>             
            </AdjustQuantityDiv>            
            <CartPrice>R${props.price}</CartPrice>
        </ProductCart>
        
    )
}

export default CartCard