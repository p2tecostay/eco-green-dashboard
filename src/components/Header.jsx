import { Menu, ChevronLeft, Search, Users } from "lucide-react";
import { useState, useEffect } from "react";
import HeaderActionButton from "./HeaderActionButton";
import DatePickerComp from "./DatePickerComp";
import AuthModal from "./auth/AuthModal";
import SignInForm from "./auth/SignInForm";
import RegisterForm from "./auth/RegisterForm";
import ForgotPasswordForm from "./auth/ForgotPasswordForm";

const currencies = [
  { code: "EUR", label: "€ EUR" },
  { code: "USD", label: "$ USD" },
  { code: "GBP", label: "£ GBP" },
  { code: "AED", label: "د.إ AED" },
];

function Header({ onMenuClick }) {
  const [activeAction, setActiveAction] = useState(null);

  // Mobile right-side panel
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);

  // Guests
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Currency
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  useEffect(() => {
    if (mobilePanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobilePanelOpen]);

  return (
    <>
      {/* ================= DESKTOP / LAPTOP HEADER ================= */}
      <header className="hidden lg:block w-full bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Auth */}
          <div className="flex gap-2">
            <HeaderActionButton
              label="Sign In"
              active={activeAction === "signin"}
              onClick={() => setActiveAction("signin")}
            />
            <HeaderActionButton
              label="Register"
              active={activeAction === "register"}
              onClick={() => setActiveAction("register")}
            />
          </div>

          {/* Search */}
          <div className="w-80 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 py-2 rounded-lg text-gray-900 bg-white/90 "
            />
          </div>

          {/* Date + Guests + Currency */}
          <div className="flex items-center gap-3">
            <DatePickerComp />

            {/* Guests */}
            <div className="relative whitespace-nowrap">
              <button
                onClick={() => setGuestsOpen(!guestsOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-gray-900"
              >
                <Users className="w-5 h-5" />
                {rooms} Room{rooms > 1 && "s"}, {adults} Adult
                {adults > 1 && "s"}, {children} Child{children > 1 && "ren"}
              </button>

              {guestsOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50 space-y-4">
                  {[
                    ["Rooms", rooms, setRooms, 1],
                    ["Adults", adults, setAdults, 1],
                    ["Children", children, setChildren, 0],
                  ].map(([label, value, setter, min]) => (
                    <div
                      key={label}
                      className="flex justify-between items-center text-gray-800"
                    >
                      <span>{label}</span>
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => setter(Math.max(min, value - 1))}
                          className="w-8 h-8 border rounded-full"
                        >
                          -
                        </button>
                        <span>{value}</span>
                        <button
                          onClick={() => setter(value + 1)}
                          className="w-8 h-8 border rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Currency */}
            <div className="relative whitespace-nowrap">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="px-4 py-2 rounded-lg bg-white/90 text-gray-900"
              >
                {selectedCurrency.label}
              </button>

              {currencyOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg z-50">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setSelectedCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-gray-800"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE LEFT HAMBURGER ================= */}
      <button
        onClick={onMenuClick}
        className="lg:hidden fixed left-4 top-4 z-50 w-10 h-10
                   bg-emerald-600 rounded-full shadow-lg
                   flex items-center justify-center"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* ================= MOBILE RIGHT SEMI-CIRCLE ================= */}
      <button
        onClick={() => setMobilePanelOpen(!mobilePanelOpen)}
        className="lg:hidden fixed right-0 top-1/2 -translate-y-1/2
                   h-16 w-10 bg-emerald-600 rounded-l-full
                   flex items-center justify-center shadow-lg z-40"
      >
        <ChevronLeft
          className={`w-5 h-5 text-white transition-transform ${
            mobilePanelOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* ================= MOBILE SEARCH PANEL ================= */}
      {mobilePanelOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobilePanelOpen(false)}
          />

          <div
            className="
              relative ml-auto h-full
              w-64 sm:w-72
              bg-gradient-to-b from-green-700 via-green-600 to-emerald-600
              text-white p-4 space-y-5 overflow-y-auto
              flex flex-col
            "
          >
            {/* MOBILE / TABLET SEARCH */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 py-2 rounded-lg text-gray-900 bg-white/90 "
              />
            </div>

            <div className="flex flex-col gap-3 [&_*]:!flex-col">
              <DatePickerComp />
            </div>

            <div className="bg-white text-gray-900 rounded-lg p-4 space-y-4">
              {[
                ["Rooms", rooms, setRooms, 1],
                ["Adults", adults, setAdults, 1],
                ["Children", children, setChildren, 0],
              ].map(([label, value, setter, min]) => (
                <div key={label} className="flex flex-col gap-2">
                  <span>{label}</span>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => setter(Math.max(min, value - 1))}
                      className="w-8 h-8 border rounded-full"
                    >
                      -
                    </button>
                    <span>{value}</span>
                    <button
                      onClick={() => setter(value + 1)}
                      className="w-8 h-8 border rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= AUTH MODAL ================= */}
      {activeAction && (
        <AuthModal open onClose={() => setActiveAction(null)}>
          {activeAction === "signin" && (
            <SignInForm
              onForgot={() => setActiveAction("forgot")}
              onSwitchToRegister={() => setActiveAction("register")}
            />
          )}

          {activeAction === "register" && (
            <RegisterForm onSwitchToSignIn={() => setActiveAction("signin")} />
          )}

          {activeAction === "forgot" && (
            <ForgotPasswordForm onBack={() => setActiveAction("signin")} />
          )}
        </AuthModal>
      )}
    </>
  );
}

export default Header;
