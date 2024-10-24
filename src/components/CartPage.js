import React from 'react';

const CartPage = ({ cart, removeFromCart, clearCart }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Función para procesar la compra
    const handlePurchase = () => {
        if (cart.length === 0) {
            alert("El carrito está vacío.");
        } else {
            // Simular el procesamiento de la compra
            alert("Compra realizada con éxito!");
            clearCart(); // Limpiar el carrito
        }
    };

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div className="cart-table-wrapper">
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio por unidad</th>
                                <th>Cantidad</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(item)}>Eliminar uno</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'right' }}>Total:</td>
                                <td>${total.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>

                    {/* Botón para procesar la compra */}
                    <div className="purchase-button-container">
                        <button className="purchase-button" onClick={handlePurchase}>
                            Procesar Compra
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
