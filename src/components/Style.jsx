import { useState } from "react";
import { styleData } from "../data/styleData.js";
import { ChevronDown, ChevronUp } from "lucide-react";

function Style() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-t border-gray-200 mt-6 pt-4">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-sm font-semibold text-gray-900">Style</h3>

        {isOpen ? (
          <ChevronUp size={18} className="text-gray-500" />
        ) : (
          <ChevronDown size={18} className="text-gray-500" />
        )}
      </button>

      {/* Content */}
      {isOpen && (
        <div className="mt-4 space-y-3">
          {styleData.map((filter) => (
            <label
              key={filter.id}
              className="flex items-center justify-between text-sm text-gray-700 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-300"
                />
                <span>{filter.label}</span>
              </div>

              <span className="text-xs text-gray-400">{filter.count}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default Style;
