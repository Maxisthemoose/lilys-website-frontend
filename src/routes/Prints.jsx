import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getProducts from "../api/getProducts";
import Item from "../components/Item";
import "./Prints.css";
// import products from "../Products.json";

const Prints = (props) => {
  props.setNav(true);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = (await getProducts()).data.prints;
        setProducts(res);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="main-container-prints">

      {
        loading &&
        <div className="spinner-container">
            <h1>Loading...</h1>
            <div className="spinner-prints" />
        </div>
      }

      <h1>Prints</h1>

      <div className="print-container">
        {error && <div className="error">Something went wrong. Please try again later</div>}
        {!error &&
          products.map(v => (
            <Item
              key={v.name}
              item={v}
              onAdd={props.onAdd}
              cart={props.cart}
            />
          ))
        }
      </div>

    </div>
  );
}

export default Prints;