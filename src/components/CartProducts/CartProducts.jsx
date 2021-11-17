import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'
import NavBarNav from '../NavBarNav'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'

const CartProducts = () => {
    const {cart, addItem, removeItem, removeAll} = useContext(CartContext)

    const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);
    
    return(
        <>
        <NavBarNav/>
        <table className="table">
            <thead>
                <tr className="text-center">
                            <th className="mx-5 my-5 h3 border bg-primary">Titulo</th>
                            <th className="mx-5 my-5 h3 border bg-primary">Cantidad</th>
                            <th className="mx-5 my-5 h3 border bg-primary">Precio</th>
                            <th className="mx-5 my-5 h3 border bg-primary">   </th>
                </tr>
            </thead>
            <tbody>
                {cart.length
                ? cart.map((product) => 
                <tr className="text-center" key={product.id}>
                    <td className="mx-5 my-5 h4">{product.title}</td>
                    <td className="mx-5 my-5 h4">{product.count}</td>
                    <td className="mx-5 my-5 h4">{product.price * product.count}</td>
                    <td><button className="btn btn-primary bg-dark m-2" onClick={removeItem}>X</button></td>
                </tr>
                )   
                : "No products" } 
            </tbody>    
        </table>
        <div className="text-center">
            <h3>Total: $ {totalPrice} </h3>
        </div>
        <div className="text-center">
            <Link to="/category/smartphone">
                <button className="btn btn-outline-dark flex-shrink-0 mb-2 my-3">Return to shop</button>
            </Link>
        </div>
        </>
    )
}

export default CartProducts;
