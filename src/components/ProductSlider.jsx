// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function ProductSlider({ products }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev + 1) % products.length);
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
//       setTimeout(() => setIsAnimating(false), 500);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full max-w-6xl mx-auto">
//       <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
//         {products.map((product, index) => (
//           <div
//             key={product.id}
//             className={`absolute inset-0 transition-all duration-500 ease-in-out ${
//               index === currentIndex
//                 ? "opacity-100 translate-x-0"
//                 : index < currentIndex
//                   ? "opacity-0 -translate-x-full"
//                   : "opacity-0 translate-x-full"
//             }`}
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
//             <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//               <h3 className="text-4xl font-bold mb-2">{product.name}</h3>
//               <p className="text-lg mb-4 opacity-90">{product.description}</p>
//               <div className="flex items-center space-x-4">
//                 <span className="text-3xl font-bold">Rs/-{product.price}</span>
//                 <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
//                   View Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
//       >
//         <ChevronLeft size={24} />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
//       >
//         <ChevronRight size={24} />
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//         {products.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentIndex
//                 ? "w-8 h-2 bg-white"
//                 : "w-2 h-2 bg-white/50 hover:bg-white/75"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSlider({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % products.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goToDetails = (id) => {
    window.location.hash = `product/${id}`;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-4xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg mb-4 opacity-90">{product.description}</p>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">Rs/-{product.price}</span>
                <button
                  onClick={() => goToDetails(product.id)}
                  className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
