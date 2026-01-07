import { sidebarData } from "../data/sidebarData";
import LOGO from "../images/logo.jpeg";
import Amenities from "./Amenities";
import HotelClass from "./HotelClass";
import Style from "./Style";
import Brands from "./Brands";
import PropertyTypes from "./PropertyTypes";

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
            title="Deepu Farms 2 Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0670191793934!2d78.4409847!3d17.7885471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc770020f406ed%3A0x871d289f9b74fb4d!2sDeepu%20Farms%202!5e0!3m2!1sen!2sae!4v1767700360131!5m2!1sen!2sae"
            className="w-full h-40"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Amenities />
        <HotelClass />
        <Style />
        <Brands />
        <PropertyTypes />
      </nav>
    </aside>
  );
}

export default Sidebar;
