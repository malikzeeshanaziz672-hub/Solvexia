export default function Loader({ show = true, text = "Loading Solvexia..." }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-20 h-20 mb-5">
          <div className="absolute inset-0 rounded-full border-4 border-amber-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-amber-600 border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/logo.jpeg"
              alt="Solvexia"
              className="w-12 h-12 rounded-full object-cover shadow"
            />
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-800 font-semibold text-lg">{text}</p>
        <p className="text-gray-500 text-sm mt-1">
          Premium furniture experience…
        </p>

        {/* Small shimmer bar */}
        <div className="mt-5 w-56 h-2 rounded-full bg-gray-100 overflow-hidden">
          <div className="h-full w-1/3 bg-amber-500 rounded-full animate-loader-bar"></div>
        </div>
      </div>
    </div>
  );
}
