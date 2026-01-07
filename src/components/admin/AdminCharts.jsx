import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const eventRevenueData = [
  { name: "Jan", revenue: 3200 },
  { name: "Feb", revenue: 2800 },
  { name: "Mar", revenue: 4100 },
  { name: "Apr", revenue: 3600 },
];

const roomOccupancyData = [
  { name: "Occupied", value: 68 },
  { name: "Available", value: 32 },
];

const COLORS = ["#22c55e", "#e5e7eb"]; // green + gray

function AdminCharts() {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Analytics Overview
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* EVENTS REVENUE */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Events Revenue
          </h3>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={eventRevenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* ROOM OCCUPANCY */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="text-lg font-medium text-gray-700 mb-4">
            Room Occupancy
          </h3>

          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roomOccupancyData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                >
                  {roomOccupancyData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* LEGEND */}
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              Occupied
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-gray-300 rounded-full" />
              Available
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCharts;
