// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import CartWidget from './CartWidget';
// import '../styles/styles.css'

// function NavScrollExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <img src='../img/funkoLogo.png' width={'200px'}/>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#" className="home">Home</Nav.Link>
//             <NavDropdown title="Categorías" id="navbarScrollingDropdown" className='categories'>
//               <NavDropdown.Item href="#">
//                 Marvel
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#">
//                 Disney
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#">
//                 Star Wars
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#">
//                 Varios
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" className='contact'>Contacto</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//         <CartWidget className='cartContainer'/>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavScrollExample;

// NavigationBar.js

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
