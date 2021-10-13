import { NavLink } from "react-router-dom";
import react,{Component} from "react";
import styles from "./SideBar.module.css"
import Inicio from "../pages/Inicio";
import Ofertas from "../pages/Ofertas";
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from "react-icons/md";
import movile from '../SideBar/movile.png'
const SideBar = () => {
    return ( 
        <>
            <div className={styles.sideBar}>
                <div>
                    <img src={movile} className={styles.imgMovile} alt="" />
                </div>
                <ul className={styles.sideBar}>
                    <li>
                        <NavLink exact to="/Inicio" activeStyle={{borderBottom: "1px solid orange", color:"orange"}} className="text-decoration-none py-2 w-100 d-inline-block" ><FaIcons.FaHome className="me-3 rounded"/> Home</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Ofertas" activeStyle={{borderBottom: "1px solid orange", color:"orange"}} className="text-decoration-none py-2 w-100 d-inline-block" ><MdIcons.MdLoyalty className="me-3 rounded"/>Offers</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Productos" activeStyle={{borderBottom: "1px solid orange", color:"orange"}} className="text-decoration-none py-2 w-100 d-inline-block" ><MdIcons.MdDashboard className="me-3 rounded"/>Products</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/Contact" activeStyle={{borderBottom: "1px solid orange", color:"orange"}} className="text-decoration-none py-2 w-100 d-inline-block" ><MdIcons.MdContacts className="me-3 rounded"/>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
} 

export default SideBar;