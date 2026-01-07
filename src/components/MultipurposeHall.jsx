import { useState } from "react";

import MPH from "../images/MPH.jpg";
import mph1 from "../images/cricket.jpg";
import mph2 from "../images/leisure.jpg";
import mph3 from "../images/pickle-ball.jpg";
import mph4 from "../images/swimming-pool.jpg";
import mph5 from "../images/rain-dance.jpg";

const images = [MPH, mph1, mph2, mph3, mph4, mph5];

function MultipurposeHall() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="mt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Events</h1>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Multipurpose Hall – Ideal for events, meetings, celebrations, and
        gatherings.
      </h2>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Games and Activities – Cricket Ball, Leisure Room, Pickle Ball, Swimming
        Pool, Rain Dance
      </h2>

      {/* GALLERY LAYOUT */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* MAIN IMAGE */}
          <div className="md:col-span-2 cursor-pointer">
            <img
              src={MPH}
              alt="Multipurpose Hall"
              className="w-full h-[360px] object-cover rounded-lg"
              onClick={() => openModal(0)}
            />
          </div>

          {/* SIDE GALLERY */}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => openModal(index + 1)}
                className={`cursor-pointer rounded-lg object-cover w-full
                  ${index === 4 ? "col-span-2 h-[110px]" : "h-[110px]"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            ></button>

            {/* IMAGE */}
            <img
              src={images[currentIndex]}
              alt="Preview"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* LEFT */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            >
              ‹
            </button>

            {/* RIGHT */}
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl px-4"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default MultipurposeHall;
