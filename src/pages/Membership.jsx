import { useState, useMemo } from "react";
import { Edit2, Trash2 } from "lucide-react";

const tierClasses = {
  Silver: "bg-gray-200 text-gray-800",
  Gold: "bg-amber-300 text-amber-900",
  Platinum: "bg-green-300 text-green-900",
};

function Membership() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Mike Paul",
      email: "mike@example.com",
      tier: "Gold",
      discount: 15,
      ecoPoints: 120,
    },
    {
      id: 2,
      name: "Sarah Green",
      email: "sarah@example.com",
      tier: "Silver",
      discount: 5,
      ecoPoints: 40,
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@example.com",
      tier: "Platinum",
      discount: 20,
      ecoPoints: 250,
    },
  ]);

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    tier: "Silver",
    discount: 0,
    ecoPoints: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");
  const [filterTier, setFilterTier] = useState("All");
  const [sortField, setSortField] = useState(null);

  // Add/Edit member
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setMembers(
        members.map((m) =>
          m.id === form.id
            ? { ...form, discount: +form.discount, ecoPoints: +form.ecoPoints }
            : m
        )
      );
      setIsEditing(false);
    } else {
      setMembers([
        ...members,
        {
          ...form,
          id: Date.now(),
          discount: +form.discount,
          ecoPoints: +form.ecoPoints,
        },
      ]);
    }
    setForm({
      id: null,
      name: "",
      email: "",
      tier: "Silver",
      discount: 0,
      ecoPoints: 0,
    });
  };

  const handleEdit = (member) => {
    setForm(member);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    if (window.confirm("Delete this member?"))
      setMembers(members.filter((m) => m.id !== id));
  };

  // Filter & sort
  const filteredMembers = useMemo(() => {
    let data = [...members];

    // Search
    if (search) {
      const s = search.toLowerCase();
      data = data.filter(
        (m) =>
          m.name.toLowerCase().includes(s) || m.email.toLowerCase().includes(s)
      );
    }

    // Tier filter
    if (filterTier !== "All") data = data.filter((m) => m.tier === filterTier);

    // Sort
    if (sortField) data.sort((a, b) => b[sortField] - a[sortField]);

    return data;
  }, [members, search, filterTier, sortField]);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Membership Management
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6"
      >
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded px-3 py-2 md:col-span-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border rounded px-3 py-2 md:col-span-2"
          required
        />
        <select
          value={form.tier}
          onChange={(e) => setForm({ ...form, tier: e.target.value })}
          className="border rounded px-3 py-2"
        >
          <option>Silver</option>
          <option>Gold</option>
          <option>Platinum</option>
        </select>
        <input
          type="number"
          placeholder="Discount %"
          value={form.discount}
          onChange={(e) => setForm({ ...form, discount: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />
        <input
          type="number"
          placeholder="Eco Points"
          value={form.ecoPoints}
          onChange={(e) => setForm({ ...form, ecoPoints: e.target.value })}
          className="border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="md:col-span-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          {isEditing ? "Update Member" : "Add Member"}
        </button>
      </form>

      {/* Filters / Search / Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 flex-1"
        />
        <select
          value={filterTier}
          onChange={(e) => setFilterTier(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option>All</option>
          <option>Silver</option>
          <option>Gold</option>
          <option>Platinum</option>
        </select>
        <select
          value={sortField || ""}
          onChange={(e) => setSortField(e.target.value || null)}
          className="border rounded px-3 py-2"
        >
          <option value="">Sort By</option>
          <option value="ecoPoints">Eco Points</option>
          <option value="discount">Discount</option>
        </select>
      </div>

      {/* Members Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow overflow-hidden">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Tier</th>
              <th className="px-4 py-2 text-left">Discount %</th>
              <th className="px-4 py-2 text-left">Eco Points</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((m) => (
              <tr key={m.id} className="border-b last:border-none">
                <td className="px-4 py-2">{m.name}</td>
                <td className="px-4 py-2">{m.email}</td>
                <td className="px-4 py-2">
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        tierClasses[m.tier]
                      } hover:brightness-90 transition`}
                    >
                      {m.tier}
                    </span>
                  </td>
                </td>
                <td className="px-4 py-2">{m.discount}</td>
                <td className="px-4 py-2">{m.ecoPoints}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(m)}
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <Edit2 size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(m.id)}
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

export default Membership;
