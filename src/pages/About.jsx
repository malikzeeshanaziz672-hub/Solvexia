import { Users, Target, Sparkles, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-bold mb-6">About Solvexia</h1>
          <p className="text-2xl text-amber-100 max-w-3xl">
            Crafting comfort and elegance for over a decade
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded in 2024, Solvexia began with a simple vision: to create
                furniture that doesn't just fill spaces, but transforms them
                into havens of comfort and style.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                What started as a small workshop has grown into a trusted name
                in premium furniture, serving thousands of satisfied customers
                across the country. Our commitment to quality craftsmanship and
                timeless design remains unchanged.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every piece we create is a testament to our dedication to
                excellence, combining traditional techniques with modern
                innovation to deliver furniture that stands the test of time.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Solvexia"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Quality First",
                description:
                  "We never compromise on materials or craftsmanship, ensuring every piece meets our rigorous standards.",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: Users,
                title: "Customer Focus",
                description:
                  "Your satisfaction is our priority. We listen, adapt, and deliver exactly what you need.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Target,
                title: "Innovation",
                description:
                  "Blending traditional craftsmanship with modern design trends to create timeless pieces.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: TrendingUp,
                title: "Sustainability",
                description:
                  "Committed to eco-friendly practices and responsible sourcing for a better tomorrow.",
                color: "from-teal-500 to-teal-600",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${value.color} text-white mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <value.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-700 to-amber-900 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              To enhance the quality of life by creating exceptional furniture
              that brings comfort, style, and joy to homes around the world. We
              believe that great furniture is more than just functional—it's an
              investment in your daily happiness and well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-600">Our journey in statistics</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Customers" },
              { number: "500+", label: "Products Designed" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
