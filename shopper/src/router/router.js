import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from '../screens/homePage'
import CartPage from '../screens/cartPage'
import CheckoutPage from '../screens/checkoutPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/cart'>
                    <CartPage />
                </Route>

                <Route exact path='/checkout'>
                    <CheckoutPage />
                </Route>
                <Route>
                    <div>
                        Página não encontrada
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router