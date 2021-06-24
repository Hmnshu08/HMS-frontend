import React, { useState } from 'react';
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
    NavbarText,
    Container
} from 'reactstrap';

import './navstyle.css'
function Navibar() {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <Navbar className="navbar navbar-light" light expand="md">
                <Container>
                    <NavbarBrand href="/home">Hotel Something</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="navbar-nav ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/guest">Add Guest</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/reservation">Book</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Room">Room Management</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/staff">Staff</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/user">User</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="login" href="/auth">login</NavLink>
                            </NavItem>
                            {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                        </Nav>
                        {/* <NavbarText>Simple Text</NavbarText> */}
                    </Collapse>
                </Container>
            </Navbar>


        </div>
    );




}

export default Navibar

