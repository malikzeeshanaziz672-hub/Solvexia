import { useState, useEffect } from "react";
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

function App() {
  const [route, setRoute] = useState({ page: "home", param: null });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";

      // ✅ NEW: product details route like: #product/3
      if (hash.startsWith("product/")) {
        const id = hash.split("/")[1];
        setRoute({ page: "product", param: id });
        return;
      }

      setRoute({ page: hash, param: null });
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    window.location.hash = page;
    setRoute({ page, param: null });
  };

  const renderPage = () => {
    // ✅ NEW: render product details page
    if (route.page === "product") {
      return <ProductDetails productId={route.param} />;
    }

    switch (route.page) {
      case "products":
        return <Products />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <Terms />;
      case "shipping":
        return <Shipping />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={route.page} onNavigate={handleNavigate} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
