import React, { useState } from 'react';
import styles from './NavBarNav.module.css'

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
                <NavItem>
                    <NavLink href="/Productos">Category 1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Productos">Category 2</NavLink>
                </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Dropdwon</DropdownToggle>
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