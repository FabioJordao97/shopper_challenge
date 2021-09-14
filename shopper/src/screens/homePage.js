import React, { useContext } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import ProductsCard from '../components/productsCard'
import GlobalStateContext from '../globalState/globalStateContext'
import { GridContainer, TitleDiv, TitleGreen } from '../styles/homePageStyles'


const HomePage = () => {
  const { products } = useContext(GlobalStateContext)

  return (
    <div>
      <Header />
      <TitleDiv>
      <h2>Compras inteligentes, </h2>
      <TitleGreen>vida inteligente.</TitleGreen>
      </TitleDiv>      
      <GridContainer>        
      {products[0].map((product) => {
        return (
          <ProductsCard
            id={product.id}
            name={product.name}
            price={product.price}
            stock={product.qty_stock}
            photo={product.photo}
          />
        )
      })}
     </GridContainer>
     <Footer />
    </div>
  )
}

export default HomePage