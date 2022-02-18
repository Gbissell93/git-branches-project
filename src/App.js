import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
