import React, { useContext } from 'react'
import GlobalStateContext from '../globalState/globalStateContext'

const ProductsCard = (props) => {
    const {products, cart, setCart} = useContext(GlobalStateContext)

    const addToCart = (productId) => {
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
    return( 
        <div>
            <p>{props.name}</p>
            <p>R${props.price}</p>
            <p>Estoque: {props.stock}</p>
            <button onClick={() => addToCart(props.id)}>Add</button>
        </div>
    )
}

export default ProductsCard