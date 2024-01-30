// CartModal.js

import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

const CartModal = ({ show, handleClose, cartItems }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contenido del Carrito</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        {cartItems.map((item, index) => (
          <Row key={index} className="mb-3">
            <Col xs={3}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto' }} />
            </Col>
            <Col xs={6}>
              <p>{item.name}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
            </Col>
          </Row>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;

