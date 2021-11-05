import React, { useState } from 'react';
import { NavLink} from "react-router-dom";
import style from './NavBarNav.module.css'
import CartWidget from '../CartWidget/index'
import ItemListContainer from '../ItemDetailContainer'

import {
Collapse,
Navbar,
NavbarToggler,
Nav,
NavItem,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
} from 'reactstrap';

const NavBarNav = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
return (
    <div className="sticky-top">
        <Navbar light expand="md" className={style.NavBarNav}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem className="mx-4 my-3" >
                    <NavLink exact to="/Products/smartphone" className="text-dark text-decoration-none">smartphones</NavLink>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <NavLink exact to="/Products/smartwatch" className="text-dark text-decoration-none">smartwatch</NavLink>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <NavLink exact to="/Products/accesories" className="text-dark text-decoration-none">accesories</NavLink>
                </NavItem>
                <NavItem className="mx-4 my-3">
                <NavLink exact to="/CartProducts" className="text-decoration-none"><CartWidget/></NavLink>
                </NavItem>
            <UncontrolledDropdown nav inNavbar className="my-2">
                <DropdownToggle nav caret>Sort by Price</DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        lower to higher
                    </DropdownItem>
                    <DropdownItem>
                        higher to lower
                    </DropdownItem>
                    <DropdownItem>
                        option 3
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
);
}

export default NavBarNav;