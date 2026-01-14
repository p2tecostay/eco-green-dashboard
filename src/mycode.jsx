// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import "./App.css";
// import MainLayout from "./layouts/MainLayout";
// import Dashboard from "./pages/Dashboard";
// import Admin from "./pages/Admin";
// import Membership from "./pages/Membership";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* MAIN APP LAYOUT */}
//         <Route element={<MainLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="admin" element={<Admin />} />
//           <Route path="membership" element={<Membership />} />
//         </Route>

//         {/* FALLBACK */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { useState } from "react";
// import { Search, Users } from "lucide-react";
// import HeaderActionButton from "./HeaderActionButton";
// import DatePickerComp from "./DatePickerComp";
// import AuthModal from "./auth/AuthModal";
// import SignInForm from "./auth/SignInForm";
// import RegisterForm from "./auth/RegisterForm";
// import ForgotPasswordForm from "./auth/ForgotPasswordForm";

// const currencies = [
//   { code: "EUR", label: "€ EUR" },
//   { code: "USD", label: "$ USD" },
//   { code: "GBP", label: "£ GBP" },
//   { code: "AED", label: "د.إ AED" },
// ];

// function Header() {
//   const [activeAction, setActiveAction] = useState(null); // "signin" | "register" | "forgot"
//   const [guestsOpen, setGuestsOpen] = useState(false);
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);
//   const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
//   const [currencyOpen, setCurrencyOpen] = useState(false);

//   return (
//     <header className="border-b border-gray-200 px-4 py-4 relative">
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//         <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 w-full">
//           {/* Auth buttons */}
//           <div className="flex gap-2 w-full lg:w-auto">
//             <HeaderActionButton
//               label="Sign In"
//               active={activeAction === "signin"}
//               onClick={() => setActiveAction("signin")}
//             />
//             <HeaderActionButton
//               label="Register"
//               active={activeAction === "register"}
//               onClick={() => setActiveAction("register")}
//             />
//           </div>

//           {/* Search */}
//           <div className="w-full lg:max-w-sm">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-10 py-2 rounded-lg
//                   bg-gray-100 border border-slate-300
//                   text-gray-900 placeholder-gray-400
//                   focus:outline-none focus:ring-2 focus:ring-green-300"
//               />
//             </div>
//           </div>

//           {/* Date + Guests + Currency */}
//           <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto items-start lg:items-center">
//             <DatePickerComp />

//             {/* Guests */}
//             <div className="relative">
//               <button
//                 onClick={() => setGuestsOpen(!guestsOpen)}
//                 className="flex items-center gap-2 px-4 py-2 rounded-lg
//                   bg-gray-100 border border-slate-300 text-sm text-gray-700
//                   hover:bg-gray-200 transition w-full sm:w-auto"
//               >
//                 <Users className="w-5 h-5" />
//                 {adults + children}
//               </button>

//               {guestsOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-700">Adults</span>
//                     <select
//                       value={adults}
//                       onChange={(e) => setAdults(Number(e.target.value))}
//                       className="border border-gray-300 rounded-md px-2 py-1 text-sm"
//                     >
//                       {[1, 2, 3, 4, 5, 6].map((n) => (
//                         <option key={n} value={n}>
//                           {n}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-sm text-gray-700">Children</span>
//                     <select
//                       value={children}
//                       onChange={(e) => setChildren(Number(e.target.value))}
//                       className="border border-gray-300 rounded-md px-2 py-1 text-sm"
//                     >
//                       {[0, 1, 2, 3, 4].map((n) => (
//                         <option key={n} value={n}>
//                           {n}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Currency selector */}
//             <div className="relative hidden lg:block">
//               <button
//                 onClick={() => setCurrencyOpen(!currencyOpen)}
//                 className="flex items-center gap-1 px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white hover:bg-gray-100 whitespace-nowrap"
//               >
//                 {selectedCurrency.label}
//               </button>

//               {currencyOpen && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                   {currencies.map((c) => (
//                     <button
//                       key={c.code}
//                       onClick={() => {
//                         setSelectedCurrency(c);
//                         setCurrencyOpen(false);
//                       }}
//                       className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
//                         selectedCurrency.code === c.code
//                           ? "text-green-600 font-medium"
//                           : "text-gray-700"
//                       }`}
//                     >
//                       {c.label}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Auth Modal */}
//       {activeAction && (
//         <AuthModal open onClose={() => setActiveAction(null)}>
//           <h2 className="text-xl font-bold text-gray-900 mb-6">
//             {activeAction === "signin"
//               ? "Sign In"
//               : activeAction === "register"
//               ? "Register"
//               : "Reset password"}
//           </h2>

//           {activeAction === "signin" && (
//             <SignInForm
//               onSuccess={() => {
//                 setActiveAction(null);
//                 alert("Signed in successfully!");
//               }}
//               onForgot={() => setActiveAction("forgot")}
//               onSwitchToRegister={() => setActiveAction("register")}
//             />
//           )}

//           {activeAction === "register" && (
//             <RegisterForm
//               onSuccess={() => {
//                 setActiveAction(null);
//                 alert("Registered successfully!");
//               }}
//               onSwitchToSignIn={() => setActiveAction("signin")}
//             />
//           )}

//           {activeAction === "forgot" && (
//             <ForgotPasswordForm onBack={() => setActiveAction("signin")} />
//           )}
//         </AuthModal>
//       )}
//     </header>
//   );
// }

// export default Header;

// import { sidebarData } from "../data/sidebarData";
// import LOGO from "../images/logo.jpeg";
// import Amenities from "./Amenities";
// import HotelClass from "./HotelClass";
// import Style from "./Style";
// import Brands from "./Brands";
// import PropertyTypes from "./PropertyTypes";

// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <aside
//       className="
//     w-72 bg-white border-r border-gray-200 p-6
//     overflow-y-auto
//     max-h-screen
//     lg:overflow-visible lg:max-h-none
//   "
//     >
//       <img src={LOGO} alt="Logo" className="hidden lg:block w-auto mb-4" />

//       <nav className="space-y-2">
//         {sidebarData.map((item) => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             onClick={() => {
//               if (window.innerWidth < 1024) {
//                 document.body.style.overflow = "auto";
//                 const closeEvent = new CustomEvent("closeSidebar");
//                 window.dispatchEvent(closeEvent);
//               }
//             }}
//             className={({ isActive }) =>
//               `block px-3 py-2 rounded-lg text-sm
//        ${
//          isActive
//            ? "bg-sky-100 text-sky-600"
//            : "text-gray-500 hover:bg-gray-100"
//        }`
//             }
//           >
//             {item.label}
//           </NavLink>
//         ))}

//         {/* Google Map - Hyderabad */}
//         <div className="rounded-lg overflow-hidden border border-gray-200">
//           <iframe
//             title="Deepu Farms 2 Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.0670191793934!2d78.4409847!3d17.7885471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc770020f406ed%3A0x871d289f9b74fb4d!2sDeepu%20Farms%202!5e0!3m2!1sen!2sae!4v1767700360131!5m2!1sen!2sae"
//             className="w-full h-40"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>

//         <Amenities />
//         <HotelClass />
//         <Style />
//         <Brands />
//         <PropertyTypes />
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;
