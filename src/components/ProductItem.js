import { Link } from "react-router-dom";
import { useContext, useState } from "react";

// *Import context
import CartContext from "../store/cart-context";

const ProductItem = (props) => {
    const { product } = props;

    const ctx = useContext(CartContext);

    const [isAdding, setIsAdding] = useState(false);

    const addToCartHandler = (event, id) => {
        event.preventDefault();
        ctx.addItemsOnCartHandler(id);
        setIsAdding(true);

        setTimeout(() => {
            setIsAdding(false);
        }, 1000)
    }

    return (
        <Link to={`products/${product._id}`}>
            <div className="w-72 my-4 sm:m-0 sm:w-auto mx-auto text-center bg-white shadow-md p-3 hover:shadow-xl">
                <div className="h-56 flex items-center justify-center ">
                    <img className="object-contain" src={product.image} alt={product.name} />
                </div>
                <h3 className="text-black m-3 text-xl font-medium">{product.name}</h3>
                <div className="flex justify-between my-2">
                    <span className=" font-normal">Rs.{product.price}</span>
                    <button disabled={isAdding} className={`${isAdding ? "bg-green-500" : "bg-yellow-600"} rounded-full hover:shadow-md px-3`} onClick={(e) => { addToCartHandler(e, product._id) }}>Add{isAdding ? "ed" : ""}</button>
                </div>
            </div>
        </Link>


    )
}
export default ProductItem;