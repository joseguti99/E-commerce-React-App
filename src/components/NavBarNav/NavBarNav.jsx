import React, { useState } from 'react';
import react,{Component} from "react";
import styles from './NavBarNav.module.css'
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
NavLink,
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
    <div>
        <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem className="mx-4">
                    <NavLink href="./Productos">Smart Phones</NavLink>
                </NavItem>
                <NavItem className="mx-4">
                    <NavLink href="./Productos">Smart Watches</NavLink>
                </NavItem>
                <NavItem className="mx-4">
                    <NavLink href="./Productos">Accesories</NavLink>
                </NavItem>
                <NavItem className="mx-4">
                <NavLink href="./CartProducts"><CartWidget/></NavLink>
                </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Brands</DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
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