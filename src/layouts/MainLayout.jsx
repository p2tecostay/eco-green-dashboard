import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { X } from "lucide-react";

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /* ===============================
     Lock body scroll on mobile
  =============================== */
  useEffect(() => {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  /* ===============================
     Auto-close on nav click
  =============================== */
  useEffect(() => {
    const handleCloseSidebar = () => setSidebarOpen(false);
    window.addEventListener("closeSidebar", handleCloseSidebar);

    return () => {
      window.removeEventListener("closeSidebar", handleCloseSidebar);
    };
  }, []);

  /* ===============================
     Swipe-to-close (mobile)
  =============================== */
  useEffect(() => {
    if (window.innerWidth >= 1024) return;

    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 80) setSidebarOpen(false);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* FULL-WIDTH STICKY HEADER */}
      <div className="sticky top-0 z-[60]">
        <Header onMenuClick={() => setSidebarOpen((prev) => !prev)} />
      </div>
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
            fixed lg:static z-40 h-full lg:h-auto w-72 bg-white
            shadow-lg lg:shadow-none
            transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          <div className="flex justify-end p-4 lg:hidden">
            <button onClick={() => setSidebarOpen(false)}>
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <Sidebar />
        </aside>

        {/* Page Content */}
        <main className="flex-1 min-h-screen mt-4">
          <div className="w-full px-4 md:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
