// *Import components
import Products from "./Products";
const Home = () => {
    return (
        <>
            <section className="home-page flex justify-between items-center container mx-auto my-10">
                <div className="w-1/2">
                    <p className=" text-3xl text-gray-500">Are you hungry?</p>
                    <h3 className=" text-7xl font-bold my-5">Don't wait!</h3>
                    <button className=" bg-yellow-600  text-xl text-white rounded-full py-2 px-5 mt-2 hover:shadow-md">Order Now</button>
                </div>
                <div>
                    <img className=" object-cover" src="/images/hero-pizza.png" alt="Hero Pizza" />

                </div>
            </section>
            <section className="container mx-auto">
                <h2 className="text-2xl my-10">Products:</h2>
                <Products />
            </section>
        </>
    )
}

export default Home;