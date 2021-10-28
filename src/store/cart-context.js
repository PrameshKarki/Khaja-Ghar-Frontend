import { createContext } from "react";

const CartContext = createContext({
    items: {},
    setItems:()=>{},
    addItemsOnCartHandler: (id) => { },
    removeItemsFromCartHandler: (id) => { },
    decrementItemsFromCartHandler: (id) => { }
});


export default CartContext;

