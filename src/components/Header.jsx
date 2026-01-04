import { Menu, Search } from "lucide-react";

function Header() {
  return (
    // Header
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Sign In or Register
            </h1>
            <p className="text-sm text-gray-500">
              Destination Offers, Festive Experiences, Loyalty and
              Sustainability
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="w-full max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg
              bg-gray-100 border border-gray-200
              text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
