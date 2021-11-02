import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import react,{Component} from "react";
import style from './NavBarNav.module.css'
import * as GrIcons from "react-icons/gr";
import CartProducts from '../CartProducts';
import CartWidget from '../CartWidget/index'


import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem,
NavbarText
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
                <NavItem className="mx-4 my-3">
                    <NavLink exact to="./Productos" className="text-dark text-decoration-none">Smart Phones</NavLink>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <NavLink exact to="./Productos" className="text-dark text-decoration-none">Smart Watches</NavLink>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <NavLink exact to="./Productos" className="text-dark text-decoration-none" navbar>Accesories</NavLink>
                </NavItem>
                <NavItem className="mx-4 my-3">
                <NavLink exact to="./CartProducts" className="text-decoration-none"><CartWidget/></NavLink>
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