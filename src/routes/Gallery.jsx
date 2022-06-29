import React from "react";
import GalleryImage from "../components/GalleryImage";
import SomeName from "../images/Gallery/SomeName.jpg";
import SomeName2 from "../images/Gallery/SomeName_2.jpg";
import SomeName3 from "../images/Gallery/SomeName_3.jpg";
import "./Gallery.css";

const Gallery = (props) => {
  props.setNav(true);
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="image-container">

        <GalleryImage
          image={SomeName}
          name="SomeName"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <GalleryImage
          image={SomeName2}
          name="SomeName2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <GalleryImage
          image={SomeName3}
          name="SomeName3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

      </div>
    </div>
  );
}

export default Gallery;