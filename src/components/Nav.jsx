import { Link } from "react-router-dom";
import "./Nav.css";
import React, { useState } from 'react';
import CartSvg from "../images/shopping-cart.svg";

const Nav = (props) => {
  /**
   * @type {{locations: string[]}}
   */
  const { locations } = props;

  const [location, setLocation] = useState(window.location.pathname);

  return (
    <div>
      <input id="menu" type="checkbox"/>
      <label className="icon" htmlFor="menu">
        <div className="menu" />
      </label>
      <div className="nav">

        {locations.map((name, i) => {
          return (
            <Link className="link" style={{
              backgroundColor: location === ("/" + (name.toLowerCase() === "home" ? "" : name.toLowerCase())) ? "var(--jewel)" : ""
            }} to={`/${name.toLowerCase() === "home" ? "" : name.toLowerCase()}`}
              key={i}
              onClick={() => setLocation(`/${name.toLowerCase() === "home" ? "" : name.toLowerCase()}`)}>{name}</Link>
          )
        })}

        <Link className="toCart link" to="/cart" key="toCart" onClick={() => setLocation("/cart")}>
          <img className="toCart-svg" src={CartSvg} alt="" />
          <h3>Cart</h3>
        </Link>
        
      </div>
    </div>
  )

}

export default Nav;