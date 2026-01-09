import { useState } from "react";
import { Search, ChevronDown, Users } from "lucide-react";
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

const roles = ["User", "Admin", "Member"];

function Header() {
  const [activeAction, setActiveAction] = useState("Sign In");

  const [guestsOpen, setGuestsOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [authDropdownOpen, setAuthDropdownOpen] = useState(false); // Sign In dropdown
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false); // Register dropdown
  const [authView, setAuthView] = useState(null); // modal: "signin" | "register" | "forgot"

  const [selectedSignInRole, setSelectedSignInRole] = useState(null);
  const [selectedRegisterRole, setSelectedRegisterRole] = useState(null);

  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 px-4 py-4 relative">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 w-full">
          {/* Auth buttons */}
          <div className="flex gap-2 w-full lg:w-auto relative">
            {/* Sign In */}
            <div className="relative">
              <HeaderActionButton
                label="Sign In"
                active={activeAction === "Sign In"}
                onClick={() => {
                  setActiveAction("Sign In");
                  setAuthDropdownOpen((prev) => !prev);
                  setRegisterDropdownOpen(false);
                  setAuthView(null); // close modal until role is selected
                }}
              />
              {authDropdownOpen && (
                <div className="absolute mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeDown">
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => {
                        setSelectedSignInRole(role);
                        setAuthView("signin");
                        setAuthDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      Sign in as {role}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Register */}
            <div className="relative">
              <HeaderActionButton
                label="Register"
                active={activeAction === "Register"}
                onClick={() => {
                  setActiveAction("Register");
                  setRegisterDropdownOpen((prev) => !prev);
                  setAuthDropdownOpen(false);
                  setAuthView(null);
                }}
              />
              {registerDropdownOpen && (
                <div className="absolute mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeDown">
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => {
                        setSelectedRegisterRole(role);
                        setAuthView("register");
                        setRegisterDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                    >
                      Register as {role}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="w-full lg:max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 py-2 rounded-lg
                  bg-gray-100 border border-slate-300
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>

          {/* Date + Guests + Currency */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-start lg:items-center">
            <DatePickerComp />

            {/* Guests */}
            <div className="relative">
              <button
                onClick={() => setGuestsOpen(!guestsOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                  bg-gray-100 border border-slate-300 text-sm text-gray-700
                  hover:bg-gray-200 transition w-full sm:w-auto"
              >
                <Users className="w-5 h-5" />
                {adults + children}
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {guestsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-4 animate-fadeDown">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Adults</span>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Children</span>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                    >
                      {[0, 1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Currency selector (desktop only) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white hover:bg-gray-100"
              >
                {selectedCurrency.label}
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {currencyOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50 animate-fadeDown">
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
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {authView && (
        <AuthModal open onClose={() => setAuthView(null)}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {authView === "signin"
              ? `Sign in as ${selectedSignInRole || "User"}`
              : authView === "register"
              ? `Register an account as ${selectedRegisterRole || "User"}`
              : "Reset password"}
          </h2>

          {authView === "signin" && (
            <SignInForm
              onSuccess={() => setAuthView(null)}
              onForgot={() => setAuthView("forgot")}
              onSwitchToRegister={() => setAuthView("register")}
            />
          )}
          {authView === "register" && (
            <RegisterForm
              onSuccess={() => setAuthView(null)}
              onSwitchToSignIn={() => setAuthView("signin")}
            />
          )}
          {authView === "forgot" && (
            <ForgotPasswordForm onBack={() => setAuthView("signin")} />
          )}
        </AuthModal>
      )}
    </header>
  );
}

export default Header;
