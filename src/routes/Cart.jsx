import React from "react";

function Cart(props) {

  // window.location.reload();
  props.setNav(false);
  return (
    <div>
      <h1>
        Cart Page
      </h1>
      {
        props.cart.map(v => (
          <h3>{v.name + " " + v.qty}</h3>
        ))
      }
    </div>
  )
}

export default Cart;