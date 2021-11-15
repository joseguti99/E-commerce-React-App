import { useContext } from 'react'
import {CartContext} from '../CartContext/CartContext'
import NavBarNav from '../NavBarNav'
import CartItem from './CartItem'

const CartProducts = () => {
    const {cart, addItem, removeItem, removeAll} = useContext(CartContext)

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
                ? cart.map((product) => <CartItem product={product}/>): 'Cargando productos...'}
            </tbody>  
            
        </table>
        </>
    )
}
export default CartProducts;
