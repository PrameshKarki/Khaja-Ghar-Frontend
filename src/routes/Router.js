import { Switch, Route } from "react-router-dom";


// *Import pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Error404 from "../pages/Error404";

const Router = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products" exact>
                <Products />
            </Route>
            <Route path="/products:productID">
                <Product />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="*">
                <Error404 />
            </Route>
        </Switch>
    )
}

export default Router;