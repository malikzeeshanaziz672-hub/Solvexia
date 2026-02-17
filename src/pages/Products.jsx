import { useState } from 'react';
import { Search, Filter, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Luxury Velvet Sofa',
    category: 'Sofas',
    price: 1299,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Premium velvet upholstery with solid wood frame',
  },
  {
    id: 2,
    name: 'Modern Sectional',
    category: 'Sofas',
    price: 1799,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Spacious L-shaped sectional perfect for families',
  },
  {
    id: 3,
    name: 'Classic Chesterfield',
    category: 'Sofas',
    price: 1599,
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Timeless design with button-tufted leather',
  },
  {
    id: 4,
    name: 'Designer Cushion Set',
    category: 'Cushions',
    price: 149,
    image: 'https://images.pexels.com/photos/1143409/pexels-photo-1143409.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Set of 4 premium decorative cushions',
  },
  {
    id: 5,
    name: 'Velvet Throw Pillows',
    category: 'Cushions',
    price: 89,
    image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Soft velvet pillows in multiple colors',
  },
  {
    id: 6,
    name: 'Accent Chair',
    category: 'Chairs',
    price: 599,
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Elegant accent chair with gold legs',
  },
  {
    id: 7,
    name: 'Ottoman Set',
    category: 'Furniture',
    price: 399,
    image: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Versatile ottoman with storage',
  },
  {
    id: 8,
    name: 'Recliner Sofa',
    category: 'Sofas',
    price: 1899,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Comfortable recliner with premium features',
  },
  {
    id: 9,
    name: 'Decorative Bolster',
    category: 'Cushions',
    price: 69,
    image: 'https://images.pexels.com/photos/7319327/pexels-photo-7319327.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Cylindrical bolster pillow for style',
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Sofas', 'Cushions', 'Chairs', 'Furniture'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-xl text-amber-100">
            Discover furniture that transforms your living space
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-center space-x-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="text-gray-600 flex-shrink-0" size={20} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transform translate-y-[-100px] group-hover:translate-y-0 transition-transform duration-300">
                    <ShoppingCart className="text-amber-600" size={20} />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-amber-700">${product.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-600">No products found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
