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
      <GalleryImage image={require("../images/placeholder.jpg")} name={name} description={description} />
      <h3>{`$${price}`}</h3>
      <h3>{description}</h3>
      <button onClick={() => onAdd({
        name, image,
      })}>Add to Cart</button>
    </div>
  )

}

export default Item;