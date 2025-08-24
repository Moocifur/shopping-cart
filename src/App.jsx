import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useCart } from './hooks/useCart';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Cart from './pages/Cart/Cart.jsx';
import './App.css';

function App() {
  
  // pull stuff from useCart into this file 
  const {
    cartItems,
    cartItemCount,
    cartTotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getItemQuantity
  } = useCart();

  return (
    <Router>
      <div className="App">
        <Navigation cartItemCount={cartItemCount} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/shop" 
              element={
                <Shop
                  addToCart={addToCart}
                  getItemQuantity={getItemQuantity}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <Cart 
                  cartItems={cartItems}
                  cartTotal={cartTotal}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
