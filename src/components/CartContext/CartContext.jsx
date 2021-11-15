import { createContext, useState  } from "react";

export const CartContext = createContext();

export const CartProvider =  ({ children }) => {
    const [cart, setCart] = useState ([])

    const addItem = (item, quantity) => {
        const ItemCart = {...item, count: quantity};
        const inCart = cart.some( product => product.id === item.id)

        console.log(!inCart)
        if(!inCart){
            setCart([...cart, ItemCart])
        }else{  
            const findItem = cart.find(product => product.id === item.id)
            findItem.count = findItem.count + quantity
            setCart([...cart])
        }
        return;
    };

    const removeItem = (id) => {
        console.log("click")
    };

    const removeAll = () =>{
        setCart([])
    }

    console.log(cart)

    return(
        <CartContext.Provider value={ {cart, setCart, addItem, removeItem, removeAll} }>
            {children}
        </CartContext.Provider>
    );
};