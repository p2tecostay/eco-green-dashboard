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

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./App.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import {
//   Leaf,
//   BedDouble,
//   CalendarCheck,
//   Users,
//   Building2,
//   Settings,
// } from "lucide-react";

// import RoomManagement from "../components/admin/RoomManagement";
// import BookingManagement from "../components/admin/BookingManagement";
// import HallBookingManagement from "../components/admin/HallBookingManagement";
// import AdminCharts from "../components/admin/AdminCharts";

// function Admin() {
//   const cards = [
//     { title: "Rooms", icon: BedDouble, value: "42 Total" },
//     { title: "Bookings", icon: CalendarCheck, value: "18 Today" },
//     { title: "Members", icon: Users, value: "120 Active" },
//     { title: "Hall Events", icon: Building2, value: "3 Upcoming" },
//     { title: "Eco Score", icon: Leaf, value: "92%" },
//     { title: "Settings", icon: Settings, value: "Configured" },
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
//         Admin Panel
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card) => {
//           const Icon = card.icon; // assign icon to Icon component
//           return (
//             <div
//               key={card.title}
//               className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
//             >
//               <div className="p-3 rounded-lg bg-green-100 text-green-600">
//                 <Icon size={24} />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">{card.title}</p>
//                 <p className="text-lg font-semibold text-gray-800">
//                   {card.value}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <AdminCharts />

//       <RoomManagement />
//       <BookingManagement />
//       <HallBookingManagement />
//     </div>
//   );
// }

// export default Admin;

// import Header from "../components/Header";
// import BannerVideos from "../components/BannerVideos";
// import RecentSearches from "../components/RecentSearches";
// import AvailableRooms from "../components/AvailableRooms";
// import Events from "../components/Events";

// function Dashboard() {
//   return (
//     <>
//       <Header />
//       <BannerVideos />
//       <RecentSearches />
//       <AvailableRooms />
//       <Events />
//     </>
//   );
// }

// export default Dashboard;

// import { useState, useMemo } from "react";
// import { Edit2, Trash2 } from "lucide-react";

// const tierClasses = {
//   Silver: "bg-gray-200 text-gray-800",
//   Gold: "bg-amber-300 text-amber-900",
//   Platinum: "bg-green-300 text-green-900",
// };

// function Membership() {
//   const [members, setMembers] = useState([
//     {
//       id: 1,
//       name: "Mike Paul",
//       email: "mike@example.com",
//       tier: "Gold",
//       discount: 15,
//       ecoPoints: 120,
//     },
//     {
//       id: 2,
//       name: "Sarah Green",
//       email: "sarah@example.com",
//       tier: "Silver",
//       discount: 5,
//       ecoPoints: 40,
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       email: "john@example.com",
//       tier: "Platinum",
//       discount: 20,
//       ecoPoints: 250,
//     },
//   ]);

//   const [form, setForm] = useState({
//     id: null,
//     name: "",
//     email: "",
//     tier: "Silver",
//     discount: 0,
//     ecoPoints: 0,
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [search, setSearch] = useState("");
//   const [filterTier, setFilterTier] = useState("All");
//   const [sortField, setSortField] = useState(null);

//   // Add/Edit member
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       setMembers(
//         members.map((m) =>
//           m.id === form.id
//             ? { ...form, discount: +form.discount, ecoPoints: +form.ecoPoints }
//             : m
//         )
//       );
//       setIsEditing(false);
//     } else {
//       setMembers([
//         ...members,
//         {
//           ...form,
//           id: Date.now(),
//           discount: +form.discount,
//           ecoPoints: +form.ecoPoints,
//         },
//       ]);
//     }
//     setForm({
//       id: null,
//       name: "",
//       email: "",
//       tier: "Silver",
//       discount: 0,
//       ecoPoints: 0,
//     });
//   };

//   const handleEdit = (member) => {
//     setForm(member);
//     setIsEditing(true);
//   };
//   const handleDelete = (id) => {
//     if (window.confirm("Delete this member?"))
//       setMembers(members.filter((m) => m.id !== id));
//   };

//   // Filter & sort
//   const filteredMembers = useMemo(() => {
//     let data = [...members];

//     // Search
//     if (search) {
//       const s = search.toLowerCase();
//       data = data.filter(
//         (m) =>
//           m.name.toLowerCase().includes(s) || m.email.toLowerCase().includes(s)
//       );
//     }

//     // Tier filter
//     if (filterTier !== "All") data = data.filter((m) => m.tier === filterTier);

//     // Sort
//     if (sortField) data.sort((a, b) => b[sortField] - a[sortField]);

//     return data;
//   }, [members, search, filterTier, sortField]);

//   return (
//     <div className="mt-10">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Membership Management
//       </h2>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6"
//       >
//         <input
//           type="text"
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="border rounded px-3 py-2 md:col-span-2"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="border rounded px-3 py-2 md:col-span-2"
//           required
//         />
//         <select
//           value={form.tier}
//           onChange={(e) => setForm({ ...form, tier: e.target.value })}
//           className="border rounded px-3 py-2"
//         >
//           <option>Silver</option>
//           <option>Gold</option>
//           <option>Platinum</option>
//         </select>
//         <input
//           type="number"
//           placeholder="Discount %"
//           value={form.discount}
//           onChange={(e) => setForm({ ...form, discount: e.target.value })}
//           className="border rounded px-3 py-2"
//           required
//         />
//         <input
//           type="number"
//           placeholder="Eco Points"
//           value={form.ecoPoints}
//           onChange={(e) => setForm({ ...form, ecoPoints: e.target.value })}
//           className="border rounded px-3 py-2"
//           required
//         />
//         <button
//           type="submit"
//           className="md:col-span-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//         >
//           {isEditing ? "Update Member" : "Add Member"}
//         </button>
//       </form>

//       {/* Filters / Search / Sort */}
//       <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-2">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border rounded px-3 py-2 flex-1"
//         />
//         <select
//           value={filterTier}
//           onChange={(e) => setFilterTier(e.target.value)}
//           className="border rounded px-3 py-2"
//         >
//           <option>All</option>
//           <option>Silver</option>
//           <option>Gold</option>
//           <option>Platinum</option>
//         </select>
//         <select
//           value={sortField || ""}
//           onChange={(e) => setSortField(e.target.value || null)}
//           className="border rounded px-3 py-2"
//         >
//           <option value="">Sort By</option>
//           <option value="ecoPoints">Eco Points</option>
//           <option value="discount">Discount</option>
//         </select>
//       </div>

//       {/* Members Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white rounded-xl shadow overflow-hidden">
//           <thead className="bg-green-100">
//             <tr>
//               <th className="px-4 py-2 text-left">Name</th>
//               <th className="px-4 py-2 text-left">Email</th>
//               <th className="px-4 py-2 text-left">Tier</th>
//               <th className="px-4 py-2 text-left">Discount %</th>
//               <th className="px-4 py-2 text-left">Eco Points</th>
//               <th className="px-4 py-2 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMembers.map((m) => (
//               <tr key={m.id} className="border-b last:border-none">
//                 <td className="px-4 py-2">{m.name}</td>
//                 <td className="px-4 py-2">{m.email}</td>
//                 <td className="px-4 py-2">
//                   <td className="px-4 py-2">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-semibold ${
//                         tierClasses[m.tier]
//                       } hover:brightness-90 transition`}
//                     >
//                       {m.tier}
//                     </span>
//                   </td>
//                 </td>
//                 <td className="px-4 py-2">{m.discount}</td>
//                 <td className="px-4 py-2">{m.ecoPoints}</td>
//                 <td className="px-4 py-2 flex gap-2">
//                   <button
//                     onClick={() => handleEdit(m)}
//                     className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
//                   >
//                     <Edit2 size={16} /> Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(m.id)}
//                     className="text-red-600 hover:text-red-800 flex items-center gap-1"
//                   >
//                     <Trash2 size={16} /> Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Membership;

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

//   /* ===============================
//      Lock body scroll on mobile
//   =============================== */
//   useEffect(() => {
//     if (window.innerWidth < 1024) {
//       document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [sidebarOpen]);

//   /* ===============================
//      Auto-close on nav click
//   =============================== */
//   useEffect(() => {
//     const handleCloseSidebar = () => setSidebarOpen(false);

//     window.addEventListener("closeSidebar", handleCloseSidebar);

//     return () => {
//       window.removeEventListener("closeSidebar", handleCloseSidebar);
//     };
//   }, []);

//   /* ===============================
//      Swipe-to-close (mobile & tablet)
//   =============================== */
//   useEffect(() => {
//     if (window.innerWidth >= 1024) return;

//     let startX = 0;

//     const handleTouchStart = (e) => {
//       startX = e.touches[0].clientX;
//     };

//     const handleTouchEnd = (e) => {
//       const endX = e.changedTouches[0].clientX;

//       if (startX - endX > 80) {
//         setSidebarOpen(false);
//       }
//     };

//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchend", handleTouchEnd);

//     return () => {
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, []);

//   return (
//     <div className="min-h-screen ">
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
//           {/* Mobile close button */}
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
//               {/* Logo */}
//               <div className="w-20 h-8 flex items-center">
//                 <img src={LOGO} alt="Logo" />
//               </div>

//               {/* Currency + Menu */}
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

//           {/* Page Content */}
//           <div
//             className="w-full flex-1 px-4 md:px-6 lg:px-8
//                 max-w-[430px] sm:max-w-[770px] lg:max-w-full
//                 bg-transparent"
//           >
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;

// import { useState } from "react";
// import { amenitiesData } from "../data/amenitiesData";
// import { ChevronDown, ChevronUp } from "lucide-react";

// function Amenities() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="border-t border-gray-200 mt-6 pt-4">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex items-center justify-between text-left"
//       >
//         <h3 className="text-sm font-semibold text-gray-900">Amenities</h3>

//         {isOpen ? (
//           <ChevronUp size={18} className="text-gray-500" />
//         ) : (
//           <ChevronDown size={18} className="text-gray-500" />
//         )}
//       </button>

//       {/* Content */}
//       {isOpen && (
//         <div className="mt-4 space-y-3">
//           {amenitiesData.map((filter) => (
//             <label
//               key={filter.id}
//               className="flex items-center justify-between text-sm text-gray-700 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-300"
//                 />
//                 <span>{filter.label}</span>
//               </div>

//               <span className="text-xs text-gray-400">{filter.count}</span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Amenities;

// import { roomsData } from "../data/roomsData";
// import RoomRow from "./RoomRow";

// function AvailableRooms() {
//   return (
//     <section className="mt-10">
//       <h3 className="text-lg font-semibold text-gray-900 mb-4">
//         Available rooms
//       </h3>

//       {/* GRID */}
//       <div className="grid grid-cols-1 gap-4">
//         {roomsData.map((room) => (
//           <RoomRow key={room.id} {...room} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default AvailableRooms;

// import video1 from "../assets/Peaceful_Indian_Eco_Farmhouse_Resort_Video.mp4";
// import video2 from "../assets/Peaceful_Indian_Farmhouse_Resort_Video.mp4";

// function BannerVideos() {
//   return (
//     <section className="mb-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Video 1 */}
//         <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
//           <video
//             className="w-full h-56 object-cover"
//             muted
//             loop
//             autoPlay
//             playsInline
//           >
//             <source src={video1} type="video/mp4" />
//           </video>
//         </div>

//         {/* Video 2 */}
//         <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
//           <video
//             className="w-full h-56 object-cover"
//             muted
//             loop
//             autoPlay
//             playsInline
//           >
//             <source src={video2} type="video/mp4" />
//           </video>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BannerVideos;

// import { useState } from "react";
// import { brandsData } from "../data/brandsData.js";
// import { ChevronDown, ChevronUp } from "lucide-react";

// function Brands() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="border-t border-gray-200 mt-6 pt-4">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex items-center justify-between text-left"
//       >
//         <h3 className="text-sm font-semibold text-gray-900">Brands</h3>

//         {isOpen ? (
//           <ChevronUp size={18} className="text-gray-500" />
//         ) : (
//           <ChevronDown size={18} className="text-gray-500" />
//         )}
//       </button>

//       {/* Content */}
//       {isOpen && (
//         <div className="mt-4 space-y-3">
//           {brandsData.map((filter) => (
//             <label
//               key={filter.id}
//               className="flex items-center justify-between text-sm text-gray-700 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-300"
//                 />
//                 <span>{filter.label}</span>
//               </div>

//               <span className="text-xs text-gray-400">{filter.count}</span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Brands;

// // src/DatePickerComponent.jsx
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // Add styling

// function DatePickerComponent() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   return (
//     // <div className="flex justify-center items-center space-x-4 p-4">
//     <div className="flex flex-col sm:flex-row gap-2 w-full">
//       <div>
//         <DatePicker
//           selected={startDate}
//           onChange={(date) => setStartDate(date)}
//           placeholderText="Select check-in date"
//           className="p-2 bg-gray-100 border border-slate-300 rounded-lg"
//           dateFormat="dd/MM/yyyy"
//         />
//       </div>
//       <div>
//         <DatePicker
//           selected={endDate}
//           onChange={(date) => setEndDate(date)}
//           placeholderText="Select check-out date"
//           className="p-2 bg-gray-100 border border-slate-300 rounded-lg"
//           dateFormat="dd/MM/yyyy"
//           minDate={startDate}
//         />
//       </div>
//     </div>
//   );
// }

// export default DatePickerComponent;

// import { useState } from "react";

// import MPH from "../images/MPH.jpg";
// import mph1 from "../images/cricket.jpg";
// import mph2 from "../images/leisure.jpg";
// import mph3 from "../images/pickle-ball.jpg";
// import mph4 from "../images/swimming-pool.jpg";
// import mph5 from "../images/rain-dance.jpg";

// const images = [MPH, mph1, mph2, mph3, mph4, mph5];

// function Events() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openModal = (index) => {
//     setCurrentIndex(index);
//     setIsOpen(true);
//   };

//   const closeModal = () => setIsOpen(false);

//   const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

//   const prevImage = () =>
//     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

//   return (
//     <section className="mt-8">
//       <h1 className="text-2xl font-bold text-gray-800 mb-4">Events</h1>
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Multipurpose Hall – Ideal for events, meetings, celebrations, and
//         gatherings.
//       </h2>

//       <h2 className="text-xl font-semibold text-gray-800 mb-4">
//         Games and Activities – Cricket Ball, Leisure Room, Pickle Ball, Swimming
//         Pool, Rain Dance
//       </h2>

//       {/* GALLERY LAYOUT */}
//       <div className="bg-white rounded-xl shadow p-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* MAIN IMAGE */}
//           <div className="md:col-span-2 cursor-pointer">
//             <img
//               src={MPH}
//               alt="Events"
//               className="w-full h-[360px] object-cover rounded-lg"
//               onClick={() => openModal(0)}
//             />
//           </div>

//           {/* SIDE GALLERY */}
//           <div className="grid grid-cols-2 gap-4">
//             {images.slice(1).map((img, index) => (
//               <img
//                 key={index}
//                 src={img}
//                 alt={`Gallery ${index + 1}`}
//                 onClick={() => openModal(index + 1)}
//                 className={`cursor-pointer rounded-lg object-cover w-full
//                   ${index === 4 ? "col-span-2 h-[110px]" : "h-[110px]"}
//                 `}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* MODAL */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="relative max-w-5xl w-full px-6"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* CLOSE */}
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-white text-3xl font-bold"
//             ></button>

//             {/* IMAGE */}
//             <img
//               src={images[currentIndex]}
//               alt="Preview"
//               className="w-full max-h-[80vh] object-contain rounded-lg"
//             />

//             {/* LEFT */}
//             <button
//               onClick={prevImage}
//               className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
//             >
//               ‹
//             </button>

//             {/* RIGHT */}
//             <button
//               onClick={nextImage}
//               className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default Events;

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

// import { useState } from "react";
// import { hotelClassData } from "../data/hotelClassData";
// import { ChevronDown, ChevronUp } from "lucide-react";

// function HotelClass() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="border-t border-gray-200 mt-6 pt-4">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex items-center justify-between text-left"
//       >
//         <h3 className="text-sm font-semibold text-gray-900">Hotel Class</h3>

//         {isOpen ? (
//           <ChevronUp size={18} className="text-gray-500" />
//         ) : (
//           <ChevronDown size={18} className="text-gray-500" />
//         )}
//       </button>

//       {/* Content */}
//       {isOpen && (
//         <div className="mt-4 space-y-3">
//           {hotelClassData.map((filter) => (
//             <label
//               key={filter.id}
//               className="flex items-center justify-between text-sm text-gray-700 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-300"
//                 />
//                 <span>{filter.label}</span>
//               </div>

//               <span className="text-xs text-gray-400">{filter.count}</span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default HotelClass;

// import { Heart, Star } from "lucide-react";
// import { useState } from "react";

// function LocationCard({ image, title, date, price, avgRating, reviews }) {
//   const [saved, setSaved] = useState(false);

//   return (
//     <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition">
//       {/* Image */}
//       <div className="relative">
//         <img
//           src={image}
//           alt={title}
//           className="h-40 w-full object-cover"
//           loading="lazy"
//         />

//         {/* Save Button */}
//         <button
//           onClick={() => setSaved(!saved)}
//           className="absolute top-3 right-3 bg-white/90 p-2 rounded-full
//                      hover:bg-white transition"
//         >
//           <Heart
//             className={`w-4 h-4 ${
//               saved ? "fill-red-500 text-red-500" : "text-gray-500"
//             }`}
//           />
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-4 space-y-2">
//         {/* Title */}
//         <h3 className="text-sm font-semibold text-gray-900">{title}</h3>

//         {/* Rating */}
//         <div className="flex items-center gap-1 text-sm">
//           <Star className="w-4 h-4 fill-green-500 text-green-500" />
//           <span className="font-medium">{avgRating}</span>
//           <span className="text-gray-500">({reviews} reviews)</span>
//         </div>

//         {/* Date */}
//         <p className="text-xs text-gray-500">{date}</p>

//         {/* Price */}
//         <p className="text-sm font-semibold text-gray-900">{price}</p>
//       </div>
//     </div>
//   );
// }

// export default LocationCard;

// import { useState } from "react";
// import { propertyTypesData } from "../data/propertyTypesData";
// import { ChevronDown, ChevronUp } from "lucide-react";

// function PropertyTypes() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="border-t border-gray-200 mt-6 pt-4">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex items-center justify-between text-left"
//       >
//         <h3 className="text-sm font-semibold text-gray-900">Property Types</h3>

//         {isOpen ? (
//           <ChevronUp size={18} className="text-gray-500" />
//         ) : (
//           <ChevronDown size={18} className="text-gray-500" />
//         )}
//       </button>

//       {/* Content */}
//       {isOpen && (
//         <div className="mt-4 space-y-3">
//           {propertyTypesData.map((filter) => (
//             <label
//               key={filter.id}
//               className="flex items-center justify-between text-sm text-gray-700 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-300"
//                 />
//                 <span>{filter.label}</span>
//               </div>

//               <span className="text-xs text-gray-400">{filter.count}</span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default PropertyTypes;

// import { recentSearchesData } from "../data/recentSearchesData";
// import LocationCard from "./LocationCard";

// function RecentSearches() {
//   return (
//     <section className="mt-8">
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold text-gray-900">
//           Your recent searches
//         </h3>
//         <button className="text-sm text-sky-500">See all</button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {recentSearchesData.map((item) => (
//           <LocationCard
//             key={item.id}
//             image={item.image}
//             title={item.title}
//             date={item.date}
//             price={item.price}
//             avgRating={item.avgRating}
//             reviews={item.reviews}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default RecentSearches;

// import { Heart, Star } from "lucide-react";
// import { useState } from "react";

// function RoomRow({
//   image,
//   name,
//   type,
//   price,
//   rating,
//   reviews,
//   reviewUser,
//   reviewText,
// }) {
//   const [saved, setSaved] = useState(false);

//   return (
//     <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition flex flex-col sm:flex-row">
//       {/* Image */}
//       <div className="relative w-full sm:w-1/2 h-60 sm:h-auto">
//         <img src={image} alt={name} className="w-full h-full object-cover" />

//         {/* Heart / Save Button */}
//         <button
//           onClick={() => setSaved(!saved)}
//           title={saved ? "Remove from favorites" : "Save to favorites"}
//           className="absolute top-3 right-3 bg-white p-2 rounded-full hover:bg-gray-100 transition shadow"
//         >
//           <Heart
//             className={`w-5 h-5 ${
//               saved ? "fill-red-500 text-red-500" : "text-gray-500"
//             }`}
//           />
//         </button>
//       </div>

//       {/* Content */}
//       <div className="p-6 flex-1 flex flex-col justify-between">
//         <div className="space-y-2">
//           {/* Room Name */}
//           <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

//           {/* Room Type */}
//           <p className="text-sm text-gray-600">{type}</p>

//           {/* Rating & Reviews */}
//           <div className="flex items-center gap-2 text-sm">
//             <Star className="w-5 h-5 fill-green-500 text-green-500" />
//             <span className="font-medium">{rating}</span>
//             <span className="text-gray-500">({reviews} reviews)</span>
//           </div>

//           {/* Price */}
//           <p className="text-base font-bold text-gray-900 mt-2">{price}</p>

//           {/* Latest Review */}
//           {reviewUser && reviewText && (
//             <div className="mt-2 border-t border-gray-200 pt-2">
//               <p className="text-sm text-gray-800 font-medium">
//                 {reviewUser} says:
//               </p>
//               <p className="text-sm text-gray-600 line-clamp-3">{reviewText}</p>
//             </div>
//           )}
//         </div>

//         {/* Reserve Button */}
//         <button className="mt-4 w-full sm:w-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
//           Reserve
//         </button>
//       </div>
//     </div>
//   );
// }

// export default RoomRow;

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

// import { useState } from "react";
// import { styleData } from "../data/styleData.js";
// import { ChevronDown, ChevronUp } from "lucide-react";

// function Style() {
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <div className="border-t border-gray-200 mt-6 pt-4">
//       {/* Header */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="w-full flex items-center justify-between text-left"
//       >
//         <h3 className="text-sm font-semibold text-gray-900">Style</h3>

//         {isOpen ? (
//           <ChevronUp size={18} className="text-gray-500" />
//         ) : (
//           <ChevronDown size={18} className="text-gray-500" />
//         )}
//       </button>

//       {/* Content */}
//       {isOpen && (
//         <div className="mt-4 space-y-3">
//           {styleData.map((filter) => (
//             <label
//               key={filter.id}
//               className="flex items-center justify-between text-sm text-gray-700 cursor-pointer"
//             >
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-300"
//                 />
//                 <span>{filter.label}</span>
//               </div>

//               <span className="text-xs text-gray-400">{filter.count}</span>
//             </label>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Style;
