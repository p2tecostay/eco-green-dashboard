import {
  Leaf,
  BedDouble,
  CalendarCheck,
  Users,
  Building2,
  Settings,
} from "lucide-react";

import RoomManagement from "../components/admin/RoomManagement";
import BookingManagement from "../components/admin/BookingManagement";
import HallBookingManagement from "../components/admin/HallBookingManagement";
import AdminCharts from "../components/admin/AdminCharts";

function Admin() {
  const cards = [
    { title: "Rooms", icon: BedDouble, value: "42 Total" },
    { title: "Bookings", icon: CalendarCheck, value: "18 Today" },
    { title: "Members", icon: Users, value: "120 Active" },
    { title: "Hall Events", icon: Building2, value: "3 Upcoming" },
    { title: "Eco Score", icon: Leaf, value: "92%" },
    { title: "Settings", icon: Settings, value: "Configured" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Admin Panel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon; // assign icon to Icon component
          return (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-green-100 text-green-600">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-lg font-semibold text-gray-800">
                  {card.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <AdminCharts />

      <RoomManagement />
      <BookingManagement />
      <HallBookingManagement />
    </div>
  );
}

export default Admin;
