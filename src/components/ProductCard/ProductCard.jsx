import { useState } from 'react';
import styles from './ProductCard.module.css';

function ProductCard({ product, addToCart, currentQuantity = 0}) {
    // Starts at 1 (so user can quickly add 1 item)
    const [quantity, setQuantity] = useState(1);

    // Handle user typing in quantity input - ensures valid number >= 1
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value) || 1;
        setQuantity(Math.max(1, value));
    };

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1); //Reset quantity after adding
    };

    return (
        <div className={styles.card}>

            <div className={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>

                {currentQuantity > 0 && (
                    <p className={styles.inCart}>
                        In cart: {currentQuantity}
                    </p>
                )}

                <div className={styles.controls}>
                    <div className={styles.quantityControls}>
                        <button
                            onClick={decrementQuantity}
                            className={styles.quantityBtn}
                            type="button"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            className={styles.quantityInput}
                        />
                        <button
                            onClick={incrementQuantity}
                            className={styles.quantityBtn}
                            type="button"
                        >
                            +
                        </button>            
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className={styles.addToCartBtn}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;