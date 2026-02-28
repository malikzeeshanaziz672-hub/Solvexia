import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductDetails({ product }) {
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="min-h-screen pt-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-10 shadow-md text-center">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Product not found
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Always use LIVE site base URL for WhatsApp (no localhost)
  const SITE_URL = "https://www.solvexia.pk";

  // ✅ Product page URL (public)
  const productUrl = `${SITE_URL}/product/${product.id}`;

  const waText = `Hello Solvexia 👋

I want to order:

🛋️ ${product.name}
💰 Rs-${product.price}

🔗 Product Link:
${productUrl}`;

  const waLink = `https://wa.me/923369392262?text=${encodeURIComponent(waText)}`;

  const specs = [
    { label: "Category", value: product.category },
    { label: "Material", value: product.details?.material || "—" },
    { label: "Warranty", value: product.details?.warranty || "—" },
    { label: "Delivery", value: product.details?.delivery || "—" },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div>
            <p className="text-amber-200 text-sm tracking-widest uppercase">
              Solvexia Collection
            </p>
            <h1 className="text-4xl font-bold mt-2">{product.name}</h1>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-full font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto_auto] gap-6">
          {/* Left card: spans only Specifications + Key Features rows */}
          <div className="lg:row-span-2 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
            <div className="relative flex-1 min-h-[220px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-sm font-semibold text-amber-700 bg-white/90 px-4 py-2 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>

            <div className="p-7 flex-shrink-0">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
                <span className="text-4xl font-bold text-amber-700">
                  Rs-/{product.price}
                </span>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold transition inline-block"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>

          {/* Specifications - row 1 */}
          <div className="bg-white rounded-2xl shadow-md p-7">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Specifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-bold text-gray-900 mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features - row 2 */}
          <div className="bg-white rounded-2xl shadow-md p-7">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>

            <div className="space-y-3">
              {(product.details?.features || []).map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-50">
                    <Check className="text-amber-700" size={16} />
                  </span>
                  <p className="text-gray-700">{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Need Customization - row 3 */}
          <div className="lg:col-start-2 lg:row-start-3 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-7 text-white">
              <h3 className="text-2xl font-bold">Need Customization?</h3>
              <p className="text-gray-200 mt-2">
                Size, color, or fabric — we can customize it for you.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="mt-5 bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full font-semibold transition"
              >
                Contact Solvexia
              </button>
            </div>
        </div>
      </section>
    </div>
  );
}
