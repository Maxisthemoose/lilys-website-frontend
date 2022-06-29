import React from "react";
import GalleryImage from "./GalleryImage";
import "./Item.css";

function Item(props) {
  const image = props.item.image;
  const name = props.item.name;
  const description = props.item.description;
  const price = props.item.price;
  const quantity = props.item.quantity;

  const onAdd = props.onAdd;
  return (
    <div className="item">
      {/* <img src={require("../images/placeholder.jpg")} alt={name} /> */}
      <GalleryImage image={require("../images/placeholder.jpg")} name={name} description={description} />
      {/* <h1>{name}</h1> */}
      <h3>{`$${price.toPrecision(4)}`}</h3>
      <h3>{quantity}</h3>
      <h3>{description}</h3>
      <button onClick={() => onAdd({
        name, price, image,
      })}>Add to Cart</button>
    </div>
  )

}

export default Item;