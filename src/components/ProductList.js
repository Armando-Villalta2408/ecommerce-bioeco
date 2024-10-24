import React from 'react';

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="card">
                    <img
                        src={require(`../images/${product.image}`)}
                        alt={product.name}
                        className="product-image"
                    />
                    <h3>{product.name}</h3>
                    <p>Precio: ${product.price.toFixed(2)}</p>
                    <p>Stock: {product.stock}</p>
                    <button onClick={() => addToCart(product)} disabled={product.stock === 0}>
                        {product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
