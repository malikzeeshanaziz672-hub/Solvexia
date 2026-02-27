import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import ProductDetails from "./pages/ProductDetails";
import TheSolvexiaTeam from "./pages/The Solvexia Team";

import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
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

  // ✅ One navigation function for whole site (Navigation + Footer + Home buttons)
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ NEW Navigation usage */}
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

          {/* ✅ Product details */}
          <Route path="/product/:id" element={<ProductDetailsRoute />} />

          {/* ✅ fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
