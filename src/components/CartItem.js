import { useContext } from "react";
import CartContext from "../store/cart-context";

const CartItem = props => {
    const { product } = props;

    const ctx = useContext(CartContext);

    const deleteItemFromCartHandler = (productID) => {
        ctx.removeItemsFromCartHandler(productID);
    }

    const incrementQuantityOnCartHandler=(productID)=>{
        ctx.addItemsOnCartHandler(productID);
    }
    const decrementQuantityOnCartHandler=(productID)=>{
        ctx.decrementItemsFromCartHandler(productID);
    }
    return (
        <li className="flex items-center justify-between my-3">
            <div className="flex items-center w-1/4">
                <div className=" w-16 h-16 flex items-center">
                    <img src={product.image} alt={product.name} />
                </div>
                <h3 className="ml-2 font-normal text-xl">{product.name}</h3>
            </div>
            <div className="flex items-center w-1/4">
                <button className="small-btn" onClick={(e)=>{decrementQuantityOnCartHandler(product._id)}}>-</button>
                <span className="text-2xl mx-3">{product.quantity}</span>
                <button className="small-btn" onClick={(e)=>{incrementQuantityOnCartHandler(product._id)}}>+</button>
            </div>
            <span className="text-xl w-1/4">
                Rs.{product.quantity * product.price}
            </span>
            <button className="flex items-center bg-red-500 text-white px-3 py-1 rounded-full text-xl hover:shadow-md" onClick={(e) => { deleteItemFromCartHandler(product._id) }}>
                X
            </button>
        </li>

    )
}
export default CartItem;