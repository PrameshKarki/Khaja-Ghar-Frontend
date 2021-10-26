const CartItem = props => {
    return (
        <li className="flex items-center justify-between my-3">
            <div className="flex items-center">
                <div className=" w-16 h-16">
                    <img src="/images/hero-pizza.png" alt="Pizza" />
                </div>
                <h3 className="ml-2 font-normal text-xl">Chicken Pizza</h3>
            </div>
            <div className="flex items-center">
                <button className="small-btn">-</button>
                <span className="text-2xl mx-3">5</span>
                <button className="small-btn">+</button>
            </div>
            <span className="text-xl">
                $ 1200
            </span>
            <button className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-xl hover:shadow-md">
                X
            </button>
        </li>

    )
}
export default CartItem;