import react,{Component} from "react";
import styles from "./Productos.module.css"
import NavBarNav from '../../NavBarNav';
import ItemListContainer from "../../ItemListContainer";

const Productos =  () => {
    return ( 
        <>
        <NavBarNav/>
            <div className="row mx-1">
                <ItemListContainer/>
            </div>
        </>
    );
}

export default Productos;