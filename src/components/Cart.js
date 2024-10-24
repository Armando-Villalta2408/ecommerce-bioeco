import React from 'react';

const Cart = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    const handleCheckout = () => {
        const message = cartItems.map(item => `${item.name}: ${item.price}`).join(', ');
        const whatsappURL = `https://wa.me/?text=Quiero comprar estos productos: ${message}, Total: ${total}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <p key={index}>{item.name} - ${item.price}</p>
                    ))}
                    <p>Total: ${total}</p>
                    <button onClick={handleCheckout}>Comprar por WhatsApp</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
