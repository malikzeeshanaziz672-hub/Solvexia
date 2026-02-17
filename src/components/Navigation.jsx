import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navigation({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <img
              src="/logo.jpeg"
              alt="Solvexia"
              className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-amber-900">Solvexia</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-lg font-medium transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? "text-amber-800"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 transform origin-left transition-transform duration-300 ${
                    currentPage === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigate("products")}
            className="hidden md:flex items-center space-x-2 bg-amber-700 text-white px-6 py-2.5 rounded-full hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <ShoppingBag size={20} />
            <span>Shop Now</span>
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                currentPage === item.id
                  ? "bg-amber-100 text-amber-800 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="w-full flex items-center justify-center space-x-2 bg-amber-700 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors">
            <ShoppingBag size={20} />
            <span>Shop Now</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
