import { Leaf } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-semibold text-gray-900">EcoSphere</h1>
            <p className="text-xs text-gray-500">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        <button
          className="w-full flex items-center px-3 py-2 rounded-lg text-sm
          bg-green-100 text-green-700"
        >
          Dashboard
        </button>

        <button
          className="w-full flex items-center px-3 py-2 rounded-lg text-sm
          text-gray-600 hover:bg-gray-100"
        >
          Analytics
        </button>
      </nav>

      {/* User */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100">
          <img
            src="/src/images/user.png"
            alt="User"
            className="w-9 h-9 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
