import { useState } from "react";

function BookingManagement() {
  const [bookings] = useState([
    {
      id: 1,
      guest: "Mike Paul",
      room: "Eco Deluxe",
      date: "2026-01-05",
      status: "Confirmed",
    },
    {
      id: 2,
      guest: "Sarah Green",
      room: "Green Suite",
      date: "2026-01-06",
      status: "Completed",
    },
    {
      id: 3,
      guest: "John Doe",
      room: "Eco Pod",
      date: "2026-01-07",
      status: "Cancelled",
    },
    {
      id: 4,
      guest: "Emily Woods",
      room: "Eco Deluxe",
      date: "2026-01-07",
      status: "Confirmed",
    },
  ]);

  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [search, setSearch] = useState("");

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      statusFilter === "All" || booking.status === statusFilter;
    const matchesDate = !dateFilter || booking.date === dateFilter;
    const matchesSearch = booking.guest
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesStatus && matchesDate && matchesSearch;
  });

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Booking Management
      </h2>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          type="text"
          placeholder="Search guest..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="All">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border rounded px-3 py-2"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Guest</th>
              <th className="px-4 py-2 text-left">Room</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No bookings found
                </td>
              </tr>
            ) : (
              filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b last:border-none">
                  <td className="px-4 py-2">{booking.guest}</td>
                  <td className="px-4 py-2">{booking.room}</td>
                  <td className="px-4 py-2">{booking.date}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium
                        ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Completed"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingManagement;
