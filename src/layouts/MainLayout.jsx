import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

// import { useState } from "react";

// import MPH from "../images/MPH.jpg";
// import mph1 from "../images/cricket.jpg";
// import mph2 from "../images/leisure.jpg";
// import mph3 from "../images/pickle-ball.jpg";
// import mph4 from "../images/swimming-pool.jpg";
// import mph5 from "../images/rain-dance.jpg";

// <h1 className="text-2xl font-bold text-gray-800 mb-4">Events</h1>
// <h2 className="text-xl font-semibold text-gray-800 mb-4">
//   Multipurpose Hall – Ideal for events, meetings, celebrations, and
//   gatherings.
// </h2>

// <h2 className="text-xl font-semibold text-gray-800 mb-4">
//   Games and Activities – Cricket Ball, Leisure Room, Pickle Ball, Swimming
//   Pool, Rain Dance
// </h2>

export default MainLayout;
