import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home"; // Ensure correct path
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import CustomOrders from "./pages/CustomOrders";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Admin from './components/Admin';
import LoginSignup from "./pages/LoginSignup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/custom-orders" element={<CustomOrders />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
