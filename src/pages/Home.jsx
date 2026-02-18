import { ArrowRight, Star, Truck, Shield, Award, Heart } from "lucide-react";
import ProductSlider from "../components/ProductSlider";

const featuredProducts = [
  {
    id: 1,
    name: "Luxury Velvet Chairs",
    category: "Sofas",
    price: 30000,
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Experience ultimate comfort with premium velvet upholstery",
  },
  {
    id: 2,
    name: "Modern Sectional",
    category: "Sofas",
    price: 49000,
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Spacious and stylish, perfect for family gatherings",
  },
  {
    id: 3,
    name: "Designer Cushion Set",
    category: "Cushions",
    price: 3000,
    image: "/solvexia_banner_1920x1080.jpg",
    // image:
    //   "https://images.pexels.com/photos/1143409/pexels-photo-1143409.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description: "Add a touch of elegance to any room",
  },
];

export default function Home({ onNavigate }) {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero"
            className="w-full h-full object-cover animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Redefine Your
              <span className="block text-amber-400">Living Space</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover premium sofas, cushions, and furniture that blend comfort
              with elegance
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate("products")}
                className="group bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <span>Explore Collection</span>
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-white/30"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured </h2>
            <p className="text-xl text-gray-600">
              Handpicked pieces that define luxury living
            </p>
          </div>
          <ProductSlider products={featuredProducts} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Why Choose Solvexia
            </h2>
            <p className="text-xl text-gray-600">Excellence in every detail</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Premium Quality",
                description:
                  "Crafted with the finest materials for lasting beauty",
                color: "text-amber-600",
              },
              {
                icon: Truck,
                title: "Free Delivery",
                description: "Complimentary shipping on all orders",
                color: "text-blue-600",
              },
              {
                icon: Shield,
                title: "5-Year Warranty",
                description: "Complete peace of mind with every purchase",
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
            Join thousands of satisfied customers who have elevated their homes
            with Solvexia
          </p>
          <button
            onClick={() => onNavigate("products")}
            className="bg-white text-amber-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
}
