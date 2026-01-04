import { recentSearchesData } from "../data/recentSearchesData";
import LocationCard from "./LocationCard";

function RecentSearches() {
  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Your recent searches
        </h3>
        <button className="text-sm text-sky-500">See all</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentSearchesData.map((item) => (
          <LocationCard
            key={item.id}
            image={item.image}
            title={item.title}
            roomtype={item.roomtype}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}

export default RecentSearches;
