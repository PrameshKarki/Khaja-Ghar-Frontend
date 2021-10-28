// *Import components
import ProductItem from "../components/ProductItem";

import { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/products").then((res) => { return res.json() }).then((data) => {
            console.log(data);
            setProducts(data);
        })
    }, [])

    return (
        <section className="container mx-auto">
            <section className="my-10 sm:grid sm:grid-cols-2 sm:gap-x-2 sm:gap-y-4 md:grid-cols-3 lg:grid-cols-5">
                {products.map((item) => { return <ProductItem key={item._id} product={item} /> })}
            </section>

        </section>
    )
}
export default Products;