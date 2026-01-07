import { useState } from "react";
import { Edit2, Trash2, Plus } from "lucide-react";

function RoomManagement() {
  // Sample room data
  const [rooms, setRooms] = useState([
    { id: 1, name: "Eco Deluxe", type: "Deluxe", price: 120, available: true },
    { id: 2, name: "Green Suite", type: "Suite", price: 200, available: false },
    { id: 3, name: "Eco Pod", type: "Single", price: 80, available: true },
  ]);

  const [form, setForm] = useState({ id: null, name: "", type: "", price: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Add or Update Room
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setRooms(
        rooms.map((r) =>
          r.id === form.id ? { ...r, ...form, price: +form.price } : r
        )
      );
      setIsEditing(false);
    } else {
      const newRoom = {
        ...form,
        id: Date.now(),
        price: +form.price,
        available: true,
      };
      setRooms([...rooms, newRoom]);
    }
    setForm({ id: null, name: "", type: "", price: "" });
  };

  // Edit Room
  const handleEdit = (room) => {
    setForm({ ...room });
    setIsEditing(true);
  };

  // Delete Room
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      setRooms(rooms.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Room Management
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Room Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded px-3 py-2 flex-1"
          required
        />
        <input
          type="text"
          placeholder="Room Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border rounded px-3 py-2 flex-1"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border rounded px-3 py-2 w-32"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={16} /> {isEditing ? "Update Room" : "Add Room"}
        </button>
      </form>

      {/* ROOMS TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-green-100 text-left">
            <tr>
              <th className="px-4 py-2">Room Name</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Price ($)</th>
              <th className="px-4 py-2">Availability</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className="border-b last:border-none">
                <td className="px-4 py-2">{room.name}</td>
                <td className="px-4 py-2">{room.type}</td>
                <td className="px-4 py-2">{room.price}</td>
                <td className="px-4 py-2">
                  {room.available ? (
                    <span className="text-green-600 font-semibold">
                      Available
                    </span>
                  ) : (
                    <span className="text-red-600 font-semibold">Booked</span>
                  )}
                </td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(room)}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(room.id)}
                    className="text-red-600 hover:text-red-800 flex items-center gap-1"
                  >
                    <Trash2 size={16} /> Delete
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

export default RoomManagement;
