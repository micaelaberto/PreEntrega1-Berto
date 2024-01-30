import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import '../styles/styles.css'


const NavigationBar = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'C3 PO', image: '../img/C-3PO.png', quantity: 1, price: 20 },
    { id: 2, name: 'Doctor Strange', image: '../img/Doctor-Strange.png', quantity: 1, price: 15 },
  ]);

  return (
    <Navbar className="custom-navbar" expand="lg">
      <img src='../img/funkoLogo.png' width={'200px'}/>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <NavDropdown title="Categorías" id="navbarScrollingDropdown" className='categories'>
               <NavDropdown.Item href="#">
                 Marvel
               </NavDropdown.Item>
               <NavDropdown.Item href="#">
                 Disney
               </NavDropdown.Item>
               <NavDropdown.Item href="#">
                Star Wars
               </NavDropdown.Item>
               <NavDropdown.Item href="#">
                 Varios
               </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
        <CartWidget cartItems={cartItems} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
