import React, { useContext } from 'react'
import GlobalStateContext from '../globalState/globalStateContext'
import { ButtonBox, ProductBox, ProductButton, ProductCard, ProductName, ProductPhoto, ProductPrice } from '../styles/homePageStyles'

const ProductsCard = (props) => {
    const { products, cart, setCart } = useContext(GlobalStateContext)

    const addToCart = (productId) => {
        const inCart = cart.find(product => product.id === productId)
        if (inCart) {
            const newCart = cart.map((product) => {
                if (productId === product.id) {
                    return {
                        ...product, quantity: product.quantity + 1
                    }
                }
                return product
            })
            setCart(newCart)
        } else {
            const addingToCart = products[0].find(product => product.id === productId)
            const newProduct = [...cart, { ...addingToCart, quantity: 1 }]
            setCart(newProduct)
        }
    }
    return (
        <ProductCard>
            <ProductBox>
                <ProductPhoto src={props.photo} />
            </ProductBox>
            <ProductName>{props.name}</ProductName>
            <span>R$ </span>
            <ProductPrice>{props.price}</ProductPrice>
            <ButtonBox>
                <ProductButton onClick={() => addToCart(props.id)}>Adicionar</ProductButton>
            </ButtonBox>

        </ProductCard>
    )
}

export default ProductsCard