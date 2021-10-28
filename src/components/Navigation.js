import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

// *Import cart icon
import { CgShoppingCart } from "react-icons/cg"

// *Import context
import CartContext from "../store/cart-context";

const Navigation = () => {
    const ctx=useContext(CartContext);
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-2">
                <div>
                    <Link to="/" className=" text-2xl">Khaja Ghar</Link>
                </div>
                <ul className="flex items-center text-lg">
                    <li className=" mx-2 hover:text-yellow-600">
                        <NavLink activeClassName="active" to="/" exact>Home</NavLink>
                    </li>
                    <li className="mx-2 hover:text-yellow-600">
                        <NavLink activeClassName="active" to="/products">Products</NavLink>
                    </li>
                    <li className="mx-2">
                        <Link to="/cart">
                            <button className="flex items-center bg-yellow-600 text-white px-5 py-1 rounded-full hover:shadow-md"><span className=" text-xl font-bold mx-2 text-black  ">{ctx.items.totalItems}</span><span className="text-2xl"><CgShoppingCart /></span></button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;