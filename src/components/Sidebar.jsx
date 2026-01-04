import { sidebarData } from "../data/sidebarData";
import PopularFilters from "./PopularFilters";

import LOGO from "../images/logo.jpeg";

function Sidebar() {
  return (
    <aside className="w-74 bg-white border-r border-gray-200 p-6">
      <img src={LOGO} alt="Logo" className="w-auto mb-4" />

      <nav className="space-y-2">
        {sidebarData.map((item) => (
          <button
            key={item.id}
            className={`w-full px-3 py-2 rounded-lg text-sm text-left
              ${
                item.active
                  ? "bg-sky-100 text-sky-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
          >
            {item.label}
          </button>
        ))}

        {/* Google Map - Hyderabad */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <iframe
            title="Hyderabad Map"
            src="https://www.google.com/maps?q=Hyderabad,India&z=12&output=embed"
            className="w-full h-40"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <PopularFilters />
      </nav>
    </aside>
  );
}

export default Sidebar;
