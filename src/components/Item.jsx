import React from "react";

function Item(props) {
  const image = props.item.image;
  const name = props.item.name;
  const description = props.item.description;
  const price = props.item.price;
  const quantity = props.item.quantity;

  const onAdd = props.onAdd;

  return (
    <div className="item">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h3>{price}</h3>
      <h3>{quantity}</h3>
      <h3>{description}</h3>
      <button onClick={() => onAdd({
        name, price, image,
      })}>Add to Cart</button>
    </div>
  )

}

export default Item;