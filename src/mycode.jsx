// import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import { Menu, X, ChevronDown } from "lucide-react";
// import LOGO from "../images/logo.jpeg";

// function MainLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const currencies = [
//     { code: "EUR", label: "€ EUR" },
//     { code: "USD", label: "$ USD" },
//     { code: "GBP", label: "£ GBP" },
//     { code: "AED", label: "د.إ AED" },
//   ];
//   const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
//   const [currencyOpen, setCurrencyOpen] = useState(false);

//   useEffect(() => {
//     if (window.innerWidth < 1024) {
//       document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [sidebarOpen]);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Mobile overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div className="flex">
//         {/* Sidebar */}
//         <aside
//           className={`
//             fixed lg:static z-50 h-full lg:h-auto w-72 bg-white
//             shadow-lg lg:shadow-none
//             transform transition-transform duration-300
//             ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//             lg:translate-x-0
//           `}
//         >
//           <div className="flex justify-end p-4 lg:hidden">
//             <button onClick={() => setSidebarOpen(false)}>
//               <X className="w-6 h-6 text-gray-600" />
//             </button>
//           </div>

//           <Sidebar />
//         </aside>

//         {/* Main content */}
//         <main className="flex-1 min-h-screen flex flex-col items-center">
//           {/* Mobile & Tablet Header */}
//           <div className="lg:hidden flex flex-col gap-2 px-4 py-3 border-b bg-white shadow-sm w-full max-w-[430px] sm:max-w-[770px]">
//             <div className="flex items-center justify-between w-full">
//               {/* LOGO */}
//               <div className="flex items-center gap-2">
//                 <div className="w-20 h-8 rounded flex items-center justify-center">
//                   <img src={LOGO} alt="Logo" />
//                 </div>
//               </div>

//               {/* Currency + Hamburger */}
//               <div className="flex items-center gap-2">
//                 <div className="relative">
//                   <button
//                     onClick={() => setCurrencyOpen(!currencyOpen)}
//                     className="flex items-center gap-1 px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white hover:bg-gray-100"
//                   >
//                     {selectedCurrency.label}
//                     <ChevronDown className="w-4 h-4 text-gray-500" />
//                   </button>

//                   {currencyOpen && (
//                     <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//                       {currencies.map((currency) => (
//                         <button
//                           key={currency.code}
//                           onClick={() => {
//                             setSelectedCurrency(currency);
//                             setCurrencyOpen(false);
//                           }}
//                           className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
//                             selectedCurrency.code === currency.code
//                               ? "text-green-600 font-medium"
//                               : "text-gray-700"
//                           }`}
//                         >
//                           {currency.label}
//                         </button>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 <button onClick={() => setSidebarOpen(true)}>
//                   <Menu className="w-6 h-6 text-gray-700" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Desktop + Tablet content wrapper */}
//           <div className="w-full flex-1 px-4 md:px-6 lg:px-8 max-w-[430px] sm:max-w-[770px] lg:max-w-full">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;

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
//     <aside className="w-74 bg-white border-r border-gray-200 p-6">
//       <img src={LOGO} alt="Logo" className="hidden lg:block w-auto mb-4" />

//       <nav className="space-y-2">
//         {sidebarData.map((item) => (
//           <NavLink
//             to={item.path}
//             className={({ isActive }) =>
//               `w-full block px-3 py-2 rounded-lg text-sm
//      ${
//        isActive ? "bg-sky-100 text-sky-600" : "text-gray-500 hover:bg-gray-100"
//      }`
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

// import { Search, ChevronDown } from "lucide-react";
// import { useState } from "react";
// import HeaderActionButton from "./HeaderActionButton";
// import DatePickerComp from "./DatePickerComp";

// const authActions = [
//   { id: 1, label: "Sign In" },
//   { id: 2, label: "Register" },
// ];

// function Header() {
//   const [activeAction, setActiveAction] = useState("Sign In");
//   const [guestsOpen, setGuestsOpen] = useState(false);
//   const [adults, setAdults] = useState(2);
//   const [children, setChildren] = useState(0);

//   return (
//     <header className="border-b border-gray-200 px-4 py-4">
//       {/* Flex container, stack on mobile, inline on desktop */}
//       <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//         {/* LEFT: Auth + Search + Date + Guests */}
//         <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 w-full">
//           {/* Auth buttons */}
//           <div className="flex gap-2 w-full lg:w-auto">
//             {authActions.map((action) => (
//               <HeaderActionButton
//                 key={action.id}
//                 label={action.label}
//                 active={activeAction === action.label}
//                 onClick={() => {
//                   setActiveAction(action.label);
//                   // setAuthModalOpen(true);
//                 }}
//               />
//             ))}
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

//           {/* Date + Guests stacked on mobile */}
//           <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
//             <DatePickerComp />
//             <div className="relative">
//               <button
//                 onClick={() => setGuestsOpen(!guestsOpen)}
//                 className="flex items-center gap-2 px-8 py-2 rounded-lg
//                 bg-gray-100 border border-slate-300 text-sm text-gray-700
//                 hover:bg-gray-200 transition whitespace-nowrap w-full sm:w-auto"
//               >
//                 Guests: {adults + children}
//                 <ChevronDown className="w-4 h-4 text-gray-500" />
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
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

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
