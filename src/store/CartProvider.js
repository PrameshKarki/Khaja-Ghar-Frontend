// TODO:Manage overall cart state and logic related to the cart here

import CartContext from "./cart-context";
import { useState, useEffect } from "react";
import { getCartItems, setCartItem } from "../utils/helper";

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
        let tempCartItems = { ...cartItems };
        let item = tempCartItems.items[id];
        delete tempCartItems.items[id]
        tempCartItems.totalItems -= item;
        setCartItems(tempCartItems);
    }

    const decrementItemsFromCartHandler = id => {
        let tempCartItems = { ...cartItems };
        if (tempCartItems.items[id]) {
            if (tempCartItems.items[id] === 1)
                return;
            else {
                tempCartItems.items[id] -= 1;
                tempCartItems.totalItems -= 1;
                setCartItems(tempCartItems);
            }
        }
        return;
    }

    useEffect(() => {
        getCartItems().then(data => {
            if (data) {
                let tempData = Object.keys(JSON.parse(data).items);
                if (tempData.length > 0)
                    setCartItems(JSON.parse(data));
            }
        }).catch(err => {
            console.log(err);
        })
        return;
    }, [])

    // TODO:Store cart in local storage
    useEffect(() => {
        const store = async () => {
            if (Object.keys(cartItems.items).length > 0)
                await setCartItem(cartItems)
        }
        store();
    }, [cartItems])

    const cartContext = {
        items: cartItems,
        setItems:setCartItems,
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