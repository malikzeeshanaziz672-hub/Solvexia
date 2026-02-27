import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import ProductDetails from "./pages/ProductDetails";
import TheSolvexiaTeam from "./pages/The Solvexia Team";

import { products } from "./data/products";

// ✅ Wrapper: /product/:id -> ProductDetails with real product object
function ProductDetailsRoute() {
  const { id } = useParams();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) return <Navigate to="/products" replace />;

  return <ProductDetails product={product} />;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  // ✅ first load
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // ✅ route change loader
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [location.pathname]);

  // ✅ One navigation function for whole site (Navigation + Footer + Home buttons)
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Loader show={loading} />

      <Navigation onNavigate={handleNavigate} />

      <main>
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route
            path="/products"
            element={<Products onNavigate={handleNavigate} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/team" element={<TheSolvexiaTeam />} />

          <Route path="/product/:id" element={<ProductDetailsRoute />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
