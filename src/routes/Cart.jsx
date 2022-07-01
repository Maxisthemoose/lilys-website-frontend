import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getProducts from "../api/getProducts";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import "./Cart.css";

function Cart(props) {
  const cartItems = props.cart;
  const setCart = props.setCart;
  const saveCart = props.saveCart;
  props.setNav(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allProducts, setAllProducts] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const prod = (await getProducts()).data;
        setAllProducts(prod);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }
    getData();
  }, []);

  function updateAmount(ev, dir) {
    let text;
    if (dir === -1) text = ev.target.previousSibling;
    else text = ev.target.previousSibling.previousSibling;
    if (parseInt(text.value) === 0 && dir === -1) return;
    text.value = parseInt(text.value) + dir;

    const itemName = dir === -1 ?
      ev.target.previousSibling.previousSibling.innerText :
      ev.target.previousSibling.previousSibling.previousSibling.innerText;
    
    const item = cartItems.find((v) => v.name === itemName);
    item.qty = parseInt(text.value);

    setTotal(cartItems.reduce((p, c) => p + (c.price * c.qty), 0));

    setCart(cartItems);
    saveCart();
  }

  return (
    <div>
      {loading && <Loading />}
      <div className="cart-page">
        <h1>Checkout</h1>
        <BackButton />
        <div className="cart-container">
          <div className="items-container">
            {
              cartItems.map(v => {
                return (
                  <div className="cart-item">
                    <img src={require("../images/placeholder.jpg")} width="100px" />
                    <h3>{v.name}</h3>
                    <input type="text" className={`quantity`} placeholder="Quantity" value={v.qty}></input>
                    <button className={`qty-dwn`} onClick={(ev) => updateAmount(ev, -1)}>{"<"}</button>
                    <button className="qty-up" onClick={(ev) => updateAmount(ev, 1)}>{">"}</button>
                    <h3>{v.price}</h3>
                  </div>
                )
              })
            }
            <h3 className="subtotal">{"$" + (total || cartItems.reduce((p, c) => p + (c.price * c.qty), 0))}</h3>
          </div>
          <div className="payment-info">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;