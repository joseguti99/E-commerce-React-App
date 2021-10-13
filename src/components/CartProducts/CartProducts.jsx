import { IconName } from "react-icons/gr";
import styles from "./CartProducts.module.css";
import { NavLink } from "react-router-dom";

const CartProducts = () => {
    return(
    <>
        <table className="table">
                <tr className="text-center">
                    <th className="mx-5 my-5 h3 border bg-primary">Titulo</th>
                    <th className="mx-5 my-5 h3 border bg-primary">Cantidad</th>
                    <th className="mx-5 my-5 h3 border bg-primary">Precio</th>
                </tr>
        </table>
    </>
    )
}
export default CartProducts;