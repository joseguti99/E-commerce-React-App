import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'
import NavBarNav from '../NavBarNav'
import {Link} from 'react-router-dom'
import { FcSearch } from "react-icons/fc";

const CartProducts = () => {
    const {cart, removeItem} = useContext(CartContext)

    const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);
    
    return(
        <>
        <NavBarNav/>
        <div className="row my-3">
            <h3 className="text-center display-6">Your Buy List</h3>
        <div className="col-7 m-5 bg-white shadow">
        <table className="table">
            <thead>
                <tr className="text-center row">
                            <th className="col-3">TITLE</th>
                            <th className="col-3">UNITS</th>
                            <th className="col-3">PRICE</th>
                            <th className="col-3"></th>
                </tr>
            </thead>
            <tbody>
                {cart.length
                ? cart.map((product) => 
                <tr className="text-center row" key={product.id}>
                    <td className="col-3">{product.title}</td>
                    <td className="col-3">X{product.count}</td>
                    <td className="col-3">{product.price * product.count}</td>
                    <td className="col-1"><img src={product.img} className="col-12" /></td>
                    <td className="col-2"><button className="btn btn-danger rounded-pill" onClick={removeItem}>X</button></td>
                </tr>
                )   
                : <div className="row"> 
                    <h4 className="text-center">There are no products in the cart</h4>
                </div> } 
            </tbody>    
        </table>
        </div>
        <div className="col-3 m-5 p-5 bg-white align-self-center shadow">
            <div className="row my-5 border border-dark rounded-3">
                <h2 className="col-5 text-end display-6">TOTAL: </h2>
                <h3 className="col-7 text-center display-6">${totalPrice}</h3>
            </div>
            <div className="text-end">
                <Link to="/payment">
                    <button className="btn btn-danger rounded-pill col-12">BUY</button>
                </Link>
            </div>
            </div>
        </div>
        <div className="text-center">
        <Link to="/category/smartphone">
                <button className="btn btn-warning col-4 rounded-pill border shadow">See more articles <FcSearch className="display-6"/></button>
            </Link>
        </div>
        </>
    )
}

export default CartProducts;
