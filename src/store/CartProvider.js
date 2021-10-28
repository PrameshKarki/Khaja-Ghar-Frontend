// TODO:Manage overall cart state and logic related to the cart here

import CartContext from "./cart-context";
import { useState, useEffect } from "react";

const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState({
        items: {},
        totalItems: 0
    })

    const addItemsOnCartHandler = (id) => {
        // !lets add item on cart
        const tempCartItems = { ...cartItems };
        if (!tempCartItems.items[id]) {
            tempCartItems.items[id] = 1;
        } else {
            tempCartItems.items[id] += 1;
        }
        tempCartItems.totalItems += 1;

        setCartItems(tempCartItems);

    }

    const removeItemsFromCartHandler = id => {

    }

    const decrementItemsFromCartHandler = id => {

    }

    useEffect(() => {
        if (localStorage.getItem("cart")) {
            setCartItems(JSON.parse(localStorage.getItem("cart")));
        }
        return;
    }, [])

    // TODO:Store cart in local storage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems])

    const cartContext = {
        items: cartItems,
        addItemsOnCartHandler,
        removeItemsFromCartHandler,
        decrementItemsFromCartHandler

    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;