import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/navLinks";

function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      {/* Dynamic navigation */}
      <nav className="mt-3 flex justify-center gap-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={`hover:text-green-600 transition
              ${
                location.pathname === link.path
                  ? "text-green-600 font-medium"
                  : "text-gray-600"
              }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
