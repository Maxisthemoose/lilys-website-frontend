import React, { useState, useEffect } from "react";
import './App.css';
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Prints from './routes/Prints';
import Clothing from './routes/Clothing';
import Stickers from './routes/Stickers';
import Shows from './routes/Shows';
import ShoppingCart from './components/ShoppingCart';
import Cart from "./routes/Cart";

function App() {
  let [cart, setCart] = useState([]);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setCart(JSON.parse(window.localStorage.getItem("cart")) || []);
  }, [])

  function onAdd(product) {
    const exists = cart.find(v => v.name === product.name);
    if (exists) {
      cart = cart.map(v => v.name === product.name ? { ...exists, qty: exists.qty + 1 } : v);
      setCart(cart);
    } else {
      cart = [...cart, { ...product, qty: 1 }];
      setCart(cart);
    }
    saveCart();
  }

  function saveCart() {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div className="App">
      <BrowserRouter>
        {
          showNav && <Nav locations={["Home", "Gallery", "Prints", "Clothing", "Stickers", "Shows", "About"]}></Nav>
        }
        <Routes>
          <Route path="/home" element={<Navigate to="/" />}/>
          <Route path="/" element={<Home setNav={setShowNav} />} />
          <Route path="/gallery" element={<Gallery setNav={setShowNav} />} />
          <Route path="/prints" element={<Prints setNav={setShowNav} onAdd={onAdd} cart={cart} />} />
          <Route path="/clothing" element={<Clothing setNav={setShowNav} onAdd={onAdd} cart={cart} />} />
          <Route path="/stickers" element={<Stickers setNav={setShowNav} onAdd={onAdd} cart={cart} />} />
          <Route path="/shows" element={<Shows setNav={setShowNav} />} />
          <Route path="/about" element={<About setNav={setShowNav} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} setNav={setShowNav} saveCart={saveCart} />} />
        </Routes>
        
        <ShoppingCart cart={cart} setCart={setCart} />

      </BrowserRouter>

    </div>
  );
}

export default App;
