import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext'

const CartWidget = () =>{
    const { cart } = useContext(CartContext)
    const counterWideget = cart.reduce((total, item) => total + item.count, 0);
    return(
        <div>
            <i className="bi bi-cart2 h4 mx-1 text-dark"></i>
            <span className="h5 bg-secondary rounded-pill text-white px-1 py-1">{counterWideget}</span><br/>
        </div>
    )
}

export default CartWidget;
