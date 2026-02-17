import { Facebook, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/WhatsApp_Image_2026-02-14_at_6.27.02_PM.jpeg"
                alt="Solvexia"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">Solvexia</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming spaces with premium furniture since 2014. Quality,
              comfort, and style in every piece.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/share/174Gti2dej/",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/malik-zeeshan-aziz-8b507535a/",
                },

                {
                  Icon: Youtube,
                  href: "https://www.youtube.com/@Solvexia-q4l",
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="bg-gray-800 hover:bg-amber-600 p-2 rounded-lg transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["home", "products", "about", "contact"].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-400 hover:text-amber-400 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                "Sofas",
                "Cushions",
                "Chairs",
                "Tables",
                "Bedroom",
                "Office",
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2026 Solvexia. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              Terms of Service
            </a>

            <a
              href="#shipping"
              className="text-gray-400 hover:text-amber-400 transition-colors"
            >
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
