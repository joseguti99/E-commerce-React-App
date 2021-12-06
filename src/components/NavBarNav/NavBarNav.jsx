import React, { useState } from 'react';
import { Link} from "react-router-dom";
import style from './NavBarNav.module.css'
import CartWidget from '../CartWidget/index'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, } from 'reactstrap';
import { FcTwoSmartphones } from "react-icons/fc";

const NavBarNav = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
return (
    <div>
        <Navbar light expand="md" className={style.NavBarNav}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <h1 className="text-justify display-6" > <FcTwoSmartphones className="display-5"/> CELL-STORE</h1><br/>
            <Nav className="ms-auto" navbar>
            <NavItem className="mx-4 my-3 text-muted" >
                    <Link to="/" className="text-dark text-decoration-none">Home</Link>
                </NavItem>
                <NavItem className="mx-4 my-3" >
                    <Link to="/category/smartphone" className="text-dark text-decoration-none">Smartphones</Link>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <Link to="/category/smartwatch" className="text-dark text-decoration-none">Smartwatch</Link>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <Link to="/category/accesories" className="text-dark text-decoration-none">Accesories</Link>
                </NavItem>
                <NavItem className="mx-4 my-3">
                <Link exact to="/Cart" className="text-decoration-none"><CartWidget/></Link>
                </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
);
}

export default NavBarNav;