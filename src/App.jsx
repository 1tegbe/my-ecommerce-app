import NavbarComponent from "./Component/NavbarComponent";
import HomePage from "./Page/HomePage";
import ProductPage from "./Page/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
