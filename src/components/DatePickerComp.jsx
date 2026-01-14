// src/DatePickerComponent.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Add styling

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    // <div className="flex justify-center items-center space-x-4 p-4">
    <div className="flex flex-col sm:flex-row gap-2 w-full">
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select check-in date"
          className="p-2 rounded-lg
  bg-white/90 border border-white/40
  text-gray-900 placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-emerald-300"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Select check-out date"
          className="p-2 rounded-lg
  bg-white/90 border border-white/40
  text-gray-900 placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-emerald-300"
          dateFormat="dd/MM/yyyy"
          minDate={startDate}
        />
      </div>
    </div>
  );
}

export default DatePickerComponent;
