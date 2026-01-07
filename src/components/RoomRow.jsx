import { Star, Heart } from "lucide-react";
import { useState } from "react";

function RoomRow({
  image,
  name,
  type,
  rating,
  reviews,
  price,
  refundable,
  reviewUser,
  reviewText,
}) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="text-2xl flex gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition">
      {/* Image Wrapper */}
      <div className="relative w-80 h-80 flex-shrink-0">
        {/* Heart on Image */}
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-3 right-3 z-10
            bg-white/90 backdrop-blur
            rounded-full p-2
            shadow hover:scale-105 transition"
          aria-label="Save room"
        >
          <Heart
            className={`w-5 h-5
              ${
                saved
                  ? "fill-red-500 text-red-500"
                  : "text-gray-500 hover:text-red-400"
              }`}
          />
        </button>

        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Middle Info */}
      <div className="flex-1 space-y-2">
        <h4 className="font-bold text-gray-900">{name}</h4>
        <p className="text-sm font-semibold text-gray-700">{type}</p>

        <div className="flex items-center gap-2 text-sm">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="font-semibold">{rating}</span>
          <span className="text-gray-500">({reviews} reviews)</span>

          {refundable && (
            <span
              className="ml-2 px-2 py-0.5 text-xs font-semibold
              text-green-800 bg-green-100 rounded-full"
            >
              Free cancellation
            </span>
          )}
        </div>

        {/* Review */}
        <div className="text-sm text-gray-700">
          <p className="font-semibold">{reviewUser}</p>
          <p className="italic text-gray-600 line-clamp-2">“{reviewText}”</p>
        </div>
      </div>

      {/* Price */}
      <div className="text-right flex flex-col justify-between">
        <p className="text-lg font-bold text-gray-900">{price}</p>
        <button className="px-6 py-2 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition">
          Reserve
        </button>
      </div>
    </div>
  );
}

export default RoomRow;
