export const getCartItems = () => {
    return new Promise((resolve, reject) => {
        resolve(localStorage.getItem("cart"))
        reject("Error while fetching cart items from local storage!");
    })
}

export const setCartItem = (items) => {
    return new Promise((resolve, reject) => {
        resolve(localStorage.setItem("cart", JSON.stringify(items)));
        reject("Error while storing cart items in local storage!");

    })
}

