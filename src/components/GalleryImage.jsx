import React from "react";
import Popup from "reactjs-popup";
import "./GalleryImage.css";

function GalleryImage(props) {
  const image = props.image;
  const image_name = props.name;
  const description = props.description;
  // const short_text = props.short;


  return (
    <div className="gallery-image">
      <Popup trigger={
        <img className={image_name + " gal_img"}
          src={image}
          alt={image_name}
          draggable="false" />
      }
      modal>
        {
          close => (
            <div className="popup-body">
              <button className="close" onClick={close}>
                &times;
              </button>
              
              <img src={image} alt={image_name} draggable="false"/>
              <h2>{image_name}</h2>
              <h4>{description}</h4>

            </div>
          )
        }
      </Popup>
      <h3 className="name">{image_name}</h3>
    </div>
  )

}

export default GalleryImage;