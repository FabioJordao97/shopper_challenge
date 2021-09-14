import React, { useContext, useEffect } from 'react'
import GlobalStateContext from '../globalState/globalStateContext'
import { goToCart, goToHome } from '../router/coordinatior'
import { useHistory } from 'react-router'
import { CartCounter, CartIcon, HeaderDiv, Logo } from '../styles/headerStyles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    const { cart, counter, setCounter } = useContext(GlobalStateContext)
    const history = useHistory()

    const cartCounter = () => {
        let count = 0;
        cart.forEach(product => {
            count += product.quantity
        })
        setCounter(count)
    }

    useEffect(() => {
        cartCounter()
    }, [cart, counter])
    return (
        <HeaderDiv>
            {history.location.pathname !== '/cart' ?
                <HeaderDiv>
                    <Logo src={'https://shopper.com.br/static/img/og-logo.png'} onClick={() => history.go(0)} />

                    <CartCounter>
                        <CartIcon>
                        <ShoppingCartIcon onClick={() => goToCart(history)}></ShoppingCartIcon>
                        </CartIcon>                        
                        <p>({counter})</p>
                    </CartCounter>

                </HeaderDiv>

                :
                <HeaderDiv>
                    <Logo src={'https://shopper.com.br/static/img/og-logo.png'} onClick={() => goToHome(history)} />
                    <CartCounter>
                        <CartIcon>
                        <ShoppingCartIcon></ShoppingCartIcon>
                        </CartIcon>                        
                        <p>({counter})</p>
                    </CartCounter>
                </HeaderDiv>
            }

        </HeaderDiv>
    )
}

export default Header