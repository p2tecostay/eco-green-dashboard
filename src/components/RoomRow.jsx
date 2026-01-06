import { Star } from "lucide-react";
import { userReviews } from "../data/userReviews";

function RoomRow({
  id,
  image,
  name,
  type,
  rating,
  reviews,
  price,
  refundable,
}) {
  // Deterministic review selection
  const review = userReviews[id % userReviews.length];

  return (
    <div className="text-xl flex gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition">
      {/* Image */}
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-64 h-64 object-cover rounded-lg flex-shrink-0 hover:scale-[1.02] transition-transform"
      />

      {/* Middle Info */}
      <div className="flex-1 space-y-2">
        <h4 className="font-bold text-gray-900">{name}</h4>

        <p className="font-semibold text-gray-700">{type}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <Star className="w-4 h-4 fill-green-500 text-green-500" />
          <span className="font-semibold text-gray-900">{rating}</span>
          <span className="text-gray-500">({reviews} reviews)</span>

          {refundable && (
            <span className="ml-2 px-2 py-0.5 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
              Free cancellation
            </span>
          )}
        </div>

        {/* User Review */}
        <p className="text-sm text-gray-800 leading-snug">
          <span className="font-semibold">{review.name}</span>: {review.text}
        </p>
      </div>

      {/* Price + Button */}
      <div className="text-right flex flex-col justify-between space-y-2">
        <p className="text-lg font-bold text-gray-900">{price}</p>

        <button className="px-6 py-2 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition">
          Reserve
        </button>
      </div>
    </div>
  );
}

export default RoomRow;
