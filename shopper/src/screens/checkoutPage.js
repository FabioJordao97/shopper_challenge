import React, { useContext } from 'react'
import CheckoutCard from '../components/checkoutCard'
import Header from '../components/header'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToHome } from '../router/coordinatior'
import { useHistory } from 'react-router'
import Footer from '../components/footer'
import { CheckoutFooter } from '../styles/footerStyles'
import { CheckoutDiv, CheckoutTitle } from '../styles/checkoutStyles'

const CheckoutPage = () => {

    const { checkout, totalPrice, totalItems, name, date } = useContext(GlobalStateContext)
    const history = useHistory()

    const formatDate = new Date(date).toLocaleDateString('pt-br');

    return (
        <CheckoutDiv>
            <Header />
            {name === '' || date === '' ? goToHome(history) :

                <div>
                    <CheckoutTitle>
                    <h1>Agradecemos a sua compra, {name}!
                    <br></br> 
                    A nossa equipe já está trabalhando para atender a sua requisição!
                    <br></br> 
                    A entrega das suas compras está programada para {formatDate}! </h1>
                    </CheckoutTitle>
                    <h2>Aqui está o comprovante das sua compras: </h2>
                    <p>Total: R${totalPrice}</p>
                    <p>Quantidade de produtos: {totalItems}</p>
                    {checkout.map((product) => {
                        return (
                            <CheckoutCard
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                stock={product.qty_stock}
                                quantity={product.quantity}
                            />
                        )
                    })}
                </div>
            }
            <CheckoutFooter>
                <Footer />
            </CheckoutFooter>
        </CheckoutDiv>
    )
}

export default CheckoutPage