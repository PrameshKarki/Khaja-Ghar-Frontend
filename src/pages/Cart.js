import { useEffect, useState, useContext } from "react";
import CartItem from "../components/CartItem";
import CartContext from "../store/cart-context";

const Cart = () => {
 
    const [cartItems, setCartItems] = useState([]);
    const ctx = useContext(CartContext);
    useEffect(() => {
        fetch("http://localhost:4000/api/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ products: Object.keys(ctx.items.items) })
        }).then(res => res.json()).then(data => {

            if (Array.isArray(data)) {

                let tempData = data.map(item => {
                    return {
                        ...item,
                        quantity: ctx.items.items[item._id]

                    }
                })
                setCartItems(tempData);
            }
        })
    }
        , [ctx.items.items]);

    let items = [], totalPrice = 0;
    Object.keys(ctx.items.items).forEach(element => {
        const item = cartItems.find(x => x._id === element);
        if (item) {
            items.push({ ...item, quantity: ctx.items.items[element] })
            totalPrice += ctx.items.items[element] * item.price;
        }
    })

    const orderHandler = () => {
        // eslint-disable-next-line no-restricted-globals
        let isSure = confirm('Are you sure?');
        if (isSure) {
            ctx.setItems({
                items: {},
                totalItems: 0
            });
        }

    }


    return (
        <section className="container mx-auto">
            {items.length > 0 &&
                <>
                    <h2 className="text-xl my-10">Cart Items:</h2>
                    <div className="w-2/3 mx-auto">
                        <ul>
                            {items.map((i) => { return <CartItem key={i._id} product={i} /> })}

                        </ul>
                        <hr className="my-5" />
                        <div className="text-right text-xl">
                            <p>Total Price: Rs.{totalPrice}</p>
                            <button className=" bg-yellow-600 text-vase text-white rounded-full py-1 px-5 mt-2 hover:shadow-md" onClick={orderHandler}>Order Now</button>
                        </div>
                    </div>
                </>
            }

            {items.length === 0 &&
                <div className="bg-white border-2 border-red-400 text-center mt-10 py-2">
                    <h1 className="text-xl">Cart is empty!</h1>
                </div>
            }

        </section >
    )
}

export default Cart;