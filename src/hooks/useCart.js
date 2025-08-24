import { useState } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Total number of items in Cart
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Total Price of items
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    // Add item to cart
    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            // 1. "Is this item already on my order slip?"
            const existingItem = prevItems.find(item => item.id === product.id);

            // 2. "Add to existing line" OR "Write new line"
            if (existingItem) {
            // Find the line and change the quantity
            return prevItems.map(item =>
                item.id === product.id 
                ? { ...item, quantity: item.quantity + quantity }  // ← Update this line
                : item                                              // ← Keep other lines same
            );
            } else {
            // Add a new line to the slip
            return [...prevItems, { ...product, quantity }];
            }
        });
    };

    // Update item quantity in cart
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                ? { ...item, quantity: newQuantity }
                : item
            )
        );
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== productId)
        );
    };

    // Clear cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Get item quantity
    const getItemQuantity = (productId) => {
        const item = cartItems.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    return {
        cartItems,
        cartItemCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getItemQuantity
    };
};