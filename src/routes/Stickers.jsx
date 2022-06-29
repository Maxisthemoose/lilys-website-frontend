import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import getProducts from "../api/getProducts";
import Item from "../components/Item";
import Loading from "../components/Loading";
import "./Stickers.css";

const Stickers = (props) => {
  props.setNav(true);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = (await getProducts()).data.stickers;
        setProducts(res);
        setLoading(false);
        document.getElementById("menu").checked = false;
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="main-container-stickers">

      {
        loading &&
        <Loading />
      }

      <h1>Stickers</h1>

      <div className="sticker-container">
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

export default Stickers;