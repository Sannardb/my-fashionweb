import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="App">
      <Header onToggleCartVisibility={toggleCartVisibility} />
      <main>
        <ProductList />
        {isCartVisible && (
          <>
            <Overlay onClick={toggleCartVisibility} />
            <Cart />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
