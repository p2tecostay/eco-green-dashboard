import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

function HallBookingManagement() {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Green Wedding",
      date: "2026-01-10",
      time: "18:00 - 23:00",
      capacity: 50,
      price: 1500,
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Eco Business Meet",
      date: "2026-01-12",
      time: "10:00 - 16:00",
      capacity: 35,
      price: 800,
      status: "Pending",
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    name: "",
    date: "",
    time: "",
    capacity: "",
    price: "",
    status: "Pending",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setEvents(
        events.map((ev) =>
          ev.id === form.id
            ? {
                ...form,
                capacity: +form.capacity,
                price: +form.price,
              }
            : ev
        )
      );
      setIsEditing(false);
    } else {
      setEvents([
        ...events,
        {
          ...form,
          id: Date.now(),
          capacity: +form.capacity,
          price: +form.price,
        },
      ]);
    }

    setForm({
      id: null,
      name: "",
      date: "",
      time: "",
      capacity: "",
      price: "",
      status: "Pending",
    });
  };

  const handleEdit = (event) => {
    setForm(event);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Cancel this event booking?")) {
      setEvents(events.filter((e) => e.id !== id));
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Multipurpose Hall Bookings
      </h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Event Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded px-3 py-2 md:col-span-2"
          required
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />

        <input
          type="text"
          placeholder="Time (e.g. 10:00 - 16:00)"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />

        <input
          type="number"
          placeholder="Capacity"
          value={form.capacity}
          onChange={(e) => setForm({ ...form, capacity: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />

        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="border rounded px-3 py-2"
        >
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Cancelled</option>
        </select>

        <button
          type="submit"
          className="md:col-span-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 justify-center"
        >
          <Plus size={16} />
          {isEditing ? "Update Event" : "Add Event"}
        </button>
      </form>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Event</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Capacity</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-b last:border-none">
                <td className="px-4 py-2">{event.name}</td>
                <td className="px-4 py-2">{event.date}</td>
                <td className="px-4 py-2">{event.time}</td>
                <td className="px-4 py-2">{event.capacity}</td>
                <td className="px-4 py-2">${event.price}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium
                      ${
                        event.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : event.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(event)}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <Trash2 size={16} /> Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HallBookingManagement;
