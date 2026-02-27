export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
      {/* Image */}
      <div className="h-64 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 shimmer" />

      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="h-5 w-24 bg-gray-200 rounded-full" />

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-200 rounded" />

        {/* Description */}
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />

        {/* Price & Button */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 w-20 bg-gray-200 rounded" />
          <div className="h-8 w-24 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
