import React, { useState } from 'react';
import { Link} from "react-router-dom";
import style from './NavBarNav.module.css'
import CartWidget from '../CartWidget/index'

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

const NavBarNav = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
return (
    <div className="sticky-top">
        <Navbar light expand="md" className={style.NavBarNav}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
                <NavItem className="mx-4 my-3" >
                    <Link to="/category/smartphone" className="text-dark text-decoration-none">smartphones</Link>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <Link to="/category/smartwatch" className="text-dark text-decoration-none">smartwatch</Link>
                </NavItem>
                <NavItem className="mx-4 my-3">
                    <Link to="/category/accesories" className="text-dark text-decoration-none">accesories</Link>
                </NavItem>
                <NavItem className="mx-4 my-3">
                <Link exact to="/Cart" className="text-decoration-none"><CartWidget/></Link>
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