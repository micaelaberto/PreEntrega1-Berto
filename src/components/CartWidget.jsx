

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import CartModal from './CartModal';

const CartWidget = ({ cartItems }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="cart-widget">
      <div className="cart-icon" onClick={handleShow}>
        <FaShoppingCart size={30} />
        <Badge className="cart-badge">{cartItems.length}</Badge>
      </div>
      <CartModal show={showModal} handleClose={handleClose} cartItems={cartItems} />
    </div>
  );
};

export default CartWidget;
