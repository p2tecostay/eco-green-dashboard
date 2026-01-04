function LocationCard({ image, title, date, price }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
        loading="lazy"
      />

      <div className="p-4">
        <h3 className="text-sm font-semibold text-sky-600">{title}</h3>

        <p className="text-xs text-gray-500 mt-1">{date}</p>

        <p className="text-sm font-medium text-gray-900 mt-2">{price}</p>
      </div>
    </div>
  );
}

export default LocationCard;
