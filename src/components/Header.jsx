import { Menu } from "lucide-react";
import { useState } from "react";
import { Search, Users } from "lucide-react";
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
  const [activeAction, setActiveAction] = useState(null); // "signin" | "register" | "forgot"

  const [guestsOpen, setGuestsOpen] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <header
      className="
    w-full
    bg-gradient-to-r from-green-700 via-green-600 to-emerald-600
    text-white
    border-b border-green-800
    px-4 py-4 mb-8
    relative
  "
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* MOBILE SIDEBAR TOGGLE */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 hover:bg-white/30 transition"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* EXISTING HEADER CONTENT */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 w-full">
          {/* Auth buttons */}
          <div className="flex gap-2 w-full lg:w-auto">
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
          <div className="w-full lg:max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="
  w-full pl-10 py-2 rounded-lg
  bg-white/90 border border-white/40
  text-gray-900 placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-emerald-300
"
              />
            </div>
          </div>

          {/* Date + Guests + Currency */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-start lg:items-center">
            <DatePickerComp />

            {/* Guests + Rooms */}
            <div className="relative whitespace-nowrap ">
              <button
                onClick={() => setGuestsOpen(!guestsOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
      bg-white/90 border border-white/40
  text-gray-900 placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-emerald-300
      hover:bg-gray-200 transition w-full sm:w-auto"
              >
                <Users className="w-5 h-6" />
                {rooms} Room{rooms > 1 && "s"}, {adults} Adult
                {adults > 1 && "s"}, {children} Child{children > 1 && "ren"}
              </button>

              {guestsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-4">
                  {/* ROOMS */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Rooms
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setRooms(Math.max(1, rooms - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-gray-800">
                        {rooms}
                      </span>
                      <button
                        onClick={() => setRooms(rooms + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* ADULTS */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Adults
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-gray-800">
                        {adults}
                      </span>
                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* CHILDREN */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Children
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-gray-800">
                        {children}
                      </span>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 text-gray-700 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Currency selector */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
      bg-white/90 border border-white/40
  text-gray-900 placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-emerald-300
      hover:bg-gray-200 transition w-full sm:w-auto whitespace-nowrap"
              >
                {selectedCurrency.label}
              </button>

              {currencyOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setSelectedCurrency(c);
                        setCurrencyOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        selectedCurrency.code === c.code
                          ? "text-green-600 font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {activeAction && (
        <AuthModal open onClose={() => setActiveAction(null)}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {activeAction === "signin"
              ? "Sign In"
              : activeAction === "register"
              ? "Register"
              : "Reset password"}
          </h2>

          {activeAction === "signin" && (
            <SignInForm
              onSuccess={() => {
                setActiveAction(null);
                alert("Signed in successfully!");
              }}
              onForgot={() => setActiveAction("forgot")}
              onSwitchToRegister={() => setActiveAction("register")}
            />
          )}

          {activeAction === "register" && (
            <RegisterForm
              onSuccess={() => {
                setActiveAction(null);
                alert("Registered successfully!");
              }}
              onSwitchToSignIn={() => setActiveAction("signin")}
            />
          )}

          {activeAction === "forgot" && (
            <ForgotPasswordForm onBack={() => setActiveAction("signin")} />
          )}
        </AuthModal>
      )}
    </header>
  );
}

export default Header;
