import { Heart, Star } from "lucide-react";
import { useState } from "react";

function LocationCard({ image, title, date, price, avgRating, reviews }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />

        {/* Save Button */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full
                     hover:bg-white transition"
        >
          <Heart
            className={`w-4 h-4 ${
              saved ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="font-medium">{avgRating}</span>
          <span className="text-gray-500">({reviews} reviews)</span>
        </div>

        {/* Date */}
        <p className="text-xs text-gray-500">{date}</p>

        {/* Price */}
        <p className="text-sm font-semibold text-gray-900">{price}</p>
      </div>
    </div>
  );
}

export default LocationCard;
