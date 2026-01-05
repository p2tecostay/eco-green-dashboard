// src/DatePickerComponent.jsx
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Add styling

function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="flex justify-center items-center space-x-4 p-4">
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Select check-in date"
          className="p-2 border border-gray-300 rounded-md"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="Select check-out date"
          className="p-2 border border-gray-300 rounded-md"
          dateFormat="dd/MM/yyyy"
          minDate={startDate}
        />
      </div>
    </div>
  );
}

export default DatePickerComponent;
