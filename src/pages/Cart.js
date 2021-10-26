import CartItem from "../components/CartItem";

const Cart = () => {
    return (
        <section className="container mx-auto">
            <h2 className="text-2xl my-10">Cart Items:</h2>
            <div className="w-2/3 mx-auto">
                <ul>
                    <CartItem />
                </ul>
                <hr className="my-5" />
                <div className="text-right text-xl">
                    <p>Total Price: $1212</p>
                    <button className=" bg-yellow-600 text-vase text-white rounded-full py-1 px-5 mt-2 hover:shadow-md">Order Now</button>
                </div>
            </div>
        </section >
    )
}

export default Cart;