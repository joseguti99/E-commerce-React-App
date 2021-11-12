import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'
import NavBarNav from '../NavBarNav'

const CartProducts = () => {
    const {cart, addItem, removeItem, removeAll} = useContext(CartContext)

    return(
        <>
        <NavBarNav/>
        <table className="table">   
                <tr className="text-center">
                    <th className="mx-5 my-5 h3 border bg-primary">Titulo</th>
                    <th className="mx-5 my-5 h3 border bg-primary">Cantidad</th>
                    <th className="mx-5 my-5 h3 border bg-primary">Precio</th>
                    <th className="mx-5 my-5 h3 border bg-primary">   </th>
                </tr>
                <tr className="text-center">
                    <th className="mx-5 my-5 h4">{cart.title}</th>
                    <th className="mx-5 my-5 h4">{cart.count}</th>
                    <th className="mx-5 my-5 h4">$ {cart.price}</th>
                    <th><button className="btn btn-primary bg-dark m-2" onClick={removeAll}> X </button></th>
                </tr>
        </table>
        </>
    )
}







export default CartProducts;
