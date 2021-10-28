import Navigation from "../components/Navigation";
import Router from "../routes/Router";


// *Import Context Provider
import CartProvider from "../store/CartProvider";

// *Get cart from local storage

const App = () => {
    return (
        <CartProvider>
            <Navigation />

            <Router />
        </CartProvider>
    )
}

export default App;