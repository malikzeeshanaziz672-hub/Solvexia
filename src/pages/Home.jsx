import { ArrowRight, Star, Shield, Award, Heart } from "lucide-react";
import ProductSlider from "../components/ProductSlider";
import { products as allProducts } from "../data/products";

export default function Home({ onNavigate }) {
  const featuredProducts = allProducts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Solvexia luxury furniture showroom"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <div className="max-w-2xl">
            {/* 🔥 Small luxury badge */}
            <span className="inline-block mt-10 mb-6 px-4 py-1.5 text-sm tracking-widest uppercase bg-amber-600/90 rounded-full shadow-lg">
              Premium Furniture Brand
            </span>

            {/* ✅ Proper styled SEO H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Solvexia
              <span className="block text-amber-400 font-semibold mt-2 text-3xl md:text-4xl lg:text-5xl">
                Luxury Sofas & Custom Furniture in Pakistan
              </span>
            </h1>

            {/* ✅ Supporting SEO paragraph */}
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              Discover handcrafted premium sofas, designer cushions, and modern
              furniture pieces built with comfort, durability, and timeless
              elegance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("/products")}
                className="bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Explore Collection
              </button>

              <button
                onClick={() => onNavigate("/contact")}
                className="border-2 border-white/40 hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Featured Luxury Furniture
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked pieces by Solvexia Furniture
            </p>
          </div>

          <ProductSlider products={featuredProducts} onNavigate={onNavigate} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose Solvexia Furniture
            </h2>
            <p className="text-xl text-gray-600">Excellence in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description:
                  "Crafted with the finest materials for lasting beauty",
                color: "text-amber-600",
              },
              {
                icon: Shield,
                title: "Warranty Support",
                description: "Peace of mind with every purchase",
                color: "text-green-600",
              },
              {
                icon: Heart,
                title: "Custom Design",
                description: "Personalized solutions for your unique space",
                color: "text-red-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`${feature.color} mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Malik Zeeshan Aziz",
                rating: 5,
                text: "The quality is outstanding! The sofa exceeded all my expectations. Highly recommend Solvexia.",
              },
              {
                name: "Zain Raza",
                rating: 5,
                text: "Beautiful furniture and excellent customer service. Our living room has never looked better.",
              },
              {
                name: "Hamza Asghar",
                rating: 5,
                text: "From browsing to delivery, everything was perfect. The cushions are incredibly comfortable.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-amber-500 fill-current"
                      size={20}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Transform Your Space Today
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Elevate your home with Solvexia Furniture — luxury, comfort, and
            style.
          </p>
          <button
            onClick={() => onNavigate("/products")}
            className="bg-white text-amber-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
