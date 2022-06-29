import React from "react";
import "./ShoppingCart.css";
import cartImage from "../images/shopping-cart.svg";

function ShoppingCart(props) {

  const location = window.location.pathname;
  
  const cart = props.cart;

  const style = {
    visibility: cart.length > 0 && location !== "/cart" ? "visible" : "hidden",
  }

  return (
    <div>
      { cart.length > 0 &&
      < a className = "cart" href = "/cart" draggable = "false" style = { style } >
        <img className="cartSvg" src={cartImage} draggable="false" alt="" />
        <h5 className="counter">{cart.length}</h5>
      </a >
      }
    </div>
  )

}

export default ShoppingCart;