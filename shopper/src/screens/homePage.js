import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import ProductsCard from '../components/productsCard'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCart } from '../router/coordinatior'

const HomePage = () => {
    const {products, cart, setCart} = useContext(GlobalStateContext)
    const history = useHistory()

        console.log(cart)
    return( 
        <div>
            <button onClick={() => goToCart(history)}>Cart</button>
          {products[0].map((product) => {
    return (
      <ProductsCard
        id={product.id}
        name={product.name}
        price={product.price}
        stock={product.qty_stock}
      />
    )
  })}
        </div>
    )
}

export default HomePage