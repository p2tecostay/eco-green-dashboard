import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Menu, X, ChevronDown } from "lucide-react";
import LOGO from "../images/logo.jpeg";

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currencies = [
    { code: "EUR", label: "€ EUR" },
    { code: "USD", label: "$ USD" },
    { code: "GBP", label: "£ GBP" },
    { code: "AED", label: "د.إ AED" },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static z-50 h-full lg:h-auto w-72 bg-white
            shadow-lg lg:shadow-none
            transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
            overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
          `}
        >
          {/* Mobile close */}
          <div className="flex justify-end p-4 lg:hidden">
            <button onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 min-h-screen flex flex-col items-center">
          {/* Mobile & Tablet Header */}
          <div className="lg:hidden flex flex-col gap-2 px-4 py-3 border-b bg-white shadow-sm w-full max-w-[430px] sm:max-w-[770px]">
            <div className="flex items-center justify-between w-full">
              {/* LOGO */}
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 rounded flex items-center justify-center">
                  <img src={LOGO} alt="Logo" />
                </div>
              </div>

              {/* Currency + Hamburger */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => setCurrencyOpen(!currencyOpen)}
                    className="flex items-center gap-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white hover:bg-gray-100"
                  >
                    {selectedCurrency.label}
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {currencyOpen && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                      {currencies.map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setCurrencyOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                            selectedCurrency.code === currency.code
                              ? "text-green-600 font-medium"
                              : "text-gray-700"
                          }`}
                        >
                          {currency.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button onClick={() => setSidebarOpen(true)}>
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop + Tablet content wrapper */}
          <div className="w-full flex-1 px-4 md:px-6 lg:px-8 max-w-[430px] sm:max-w-[770px] lg:max-w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
