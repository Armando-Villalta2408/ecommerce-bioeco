import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="card">
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
    );
};

export default ProductCard;
