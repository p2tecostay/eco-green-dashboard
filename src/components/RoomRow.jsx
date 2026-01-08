import { Heart, Star } from "lucide-react";
import { useState } from "react";

function RoomRow({
  image,
  name,
  type,
  price,
  rating,
  reviews,
  reviewUser,
  reviewText,
}) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition flex flex-col sm:flex-row">
      {/* Image */}
      <div className="relative w-full sm:w-1/2 h-60 sm:h-auto">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        {/* Heart / Save Button */}
        <button
          onClick={() => setSaved(!saved)}
          title={saved ? "Remove from favorites" : "Save to favorites"}
          className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition shadow"
        >
          <Heart
            className={`w-5 h-5 ${
              saved ? "fill-red-500 text-red-500" : "text-gray-500"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Room Name */}
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

          {/* Room Type */}
          <p className="text-sm text-gray-600">{type}</p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-5 h-5 fill-green-500 text-green-500" />
            <span className="font-medium">{rating}</span>
            <span className="text-gray-500">({reviews} reviews)</span>
          </div>

          {/* Price */}
          <p className="text-base font-bold text-gray-900 mt-2">{price}</p>

          {/* Latest Review */}
          {reviewUser && reviewText && (
            <div className="mt-2 border-t border-gray-200 pt-2">
              <p className="text-sm text-gray-800 font-medium">
                {reviewUser} says:
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">{reviewText}</p>
            </div>
          )}
        </div>

        {/* Reserve Button */}
        <button className="mt-4 w-full sm:w-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
          Reserve
        </button>
      </div>
    </div>
  );
}

export default RoomRow;
