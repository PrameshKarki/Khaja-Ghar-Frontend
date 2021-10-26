const ProductItem = (props) => {
    return (
        <div className="text-center bg-white shadow-md p-3 hover:shadow-xl">
            <div className="h-56 flex items-center justify-center ">
                <img className="object-contain" src="/images/hero-pizza.png" alt="Pizza" />
            </div>
            <h3 className="text-black m-3 text-xl font-medium">Chicken Pizza</h3>
            <div className="flex justify-between my-2">
                <span className=" font-normal">$ 400</span>
                <button className="bg-yellow-600 rounded-full hover:shadow-md px-3">Add</button>
            </div>

        </div>

    )
}
export default ProductItem;