import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import './styles.css';
import productsData from './data/products.json';

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setProducts(
      products.map((p) =>
        p.id === product.id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  // Función para eliminar productos del carrito (solo uno a la vez)
  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }

    setProducts(
      products.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock + 1 } : p
      )
    );
  };

  // Función para limpiar el carrito después de la compra
  const clearCart = () => {
    setCart([]); // Vaciar el carrito
  };

  return (
    <Router>
      <nav>
        <img src={require('./images/logo.jpg')} alt="Logo" className="logo" />
        <div className="nav-center">
          <Link to="/">Productos</Link>
        </div>
        <div className="nav-right">
          <Link to="/cart">Carrito ({cart.length})</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
