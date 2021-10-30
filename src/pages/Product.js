import { BiArrowBack } from "react-icons/bi"

import { useParams, useHistory } from "react-router-dom";

import { useEffect, useState, useContext } from "react";
import CartContext from "../store/cart-context";


const Product = (props) => {
    const { productID } = useParams();
    const [product, setProduct] = useState({});
    const history = useHistory();

    const ctx = useContext(CartContext);

    useEffect(() => {
        fetch(`http://localhost:4000/api/products/${productID}`).then(res => res.json()).then(data => {
            setProduct(data);
        })
    }, [productID])

    const backHandler = () => {
        history.goBack();
    }
    const addItemOnCartHandler = (ID) => {
        ctx.addItemsOnCartHandler(ID);
    }

    return (
        <section className="container mx-auto my-10">
            <p onClick={backHandler} className="font-semibold flex items-center cursor-pointer hover:text-yellow-600"><span><BiArrowBack /></span>Back</p>
            <div className="flex items-center my-10">
                <div className="h-72 w-72 flex items-center bg-white">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="mx-3">
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-xl my-4">$ {product.price}</p>
                    <button className="block bg-yellow-600  text-base text-white rounded-full py-2 px-5 mt-2 hover:shadow-md" onClick={(e) => { addItemOnCartHandler(product._id) }}>Add To Cart</button>
                </div>
            </div>

        </section>
    )
}

export default Product;