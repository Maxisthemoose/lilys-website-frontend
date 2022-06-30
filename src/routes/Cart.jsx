import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getProducts from "../api/getProducts";
import BackButton from "../components/BackButton";
import Loading from "../components/Loading";
import "./Cart.css";

function Cart(props) {
  const cartItems = props.cart;
  console.log(cartItems);
  props.setNav(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allProducts, setAllProducts] = useState({});

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

  return (
    <div>
      {loading && <Loading />}
      <div className="cart-container">
        <BackButton />

      </div>
    </div>
  )
}

export default Cart;