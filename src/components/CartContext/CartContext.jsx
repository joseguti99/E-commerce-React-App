import { createContext, useState  } from "react";

export const CartContext = createContext();

export const CartProvider =  ({ children }) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, quantity) => {
    const product = {
        title: item.title,
        price: item.price,
        count: quantity,
        id: item.id,
        img: item.img,
        stock: item.stock,
    };

    const existingIndex = cart.findIndex((product => product.title === item.title))
    if (existingIndex >= 0) {
        setCart(cart.map((item, index) => (existingIndex === index ? { ...item, count: quantity + quantity } : null)));
    } else {
        setCart([...cart, product]);
    }
    };

    const removeItem = (title) => {
        const existingIndex = cart.findIndex((product) => product.title === title);
        const cartCopy = Array.from(cart);
        if (existingIndex <= 0) {
        cartCopy.splice(existingIndex, 1);
        }
        setCart(cartCopy);
    };

    const removeAll = () =>{
        setCart([])
    }

    


    return(
        <CartContext.Provider value={ {cart, setCart, addItem, removeItem, removeAll} }>
            {children}
        </CartContext.Provider>
    );
};