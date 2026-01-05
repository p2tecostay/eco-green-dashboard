import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import HeaderActionButton from "./HeaderActionButton";
import DatePickerComp from "./DatePickerComp";

const currencies = [
  { code: "EUR", label: "€ EUR" },
  { code: "USD", label: "$ USD" },
  { code: "GBP", label: "£ GBP" },
  { code: "AED", label: "د.إ AED" },
];

const authActions = [
  { id: 1, label: "Sign In" },
  { id: 2, label: "Register" },
];

function Header() {
  const [activeAction, setActiveAction] = useState("Sign In");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          {/* Auth buttons */}
          <div className="flex gap-2">
            {authActions.map((action) => (
              <HeaderActionButton
                key={action.id}
                label={action.label}
                active={activeAction === action.label}
                onClick={() => setActiveAction(action.label)}
              />
            ))}
          </div>

          {/* Search */}
          <div className="w-full max-w-sm">
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

          <DatePickerComp />
        </div>

        {/* RIGHT – Currency Selector */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700
              border border-gray-200 rounded-lg px-3 py-2
              hover:bg-gray-100 transition"
          >
            {selectedCurrency.label}
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {currencies.map((currency) => (
                <button
                  key={currency.code}
                  onClick={() => {
                    setSelectedCurrency(currency);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm
                    hover:bg-gray-100
                    ${
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
    </header>
  );
}

export default Header;

// import { Search, ChevronDown } from "lucide-react";
// import { useState } from "react";

// const currencies = [
//   { code: "EUR", label: "€ EUR" },
//   { code: "USD", label: "$ USD" },
//   { code: "GBP", label: "£ GBP" },
//   { code: "AED", label: "د.إ AED" },
// ];

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

//   return (
//     <header className="bg-white border-b border-gray-200 px-6 py-4">
//       <div className="flex items-center justify-between">
//         {/* LEFT */}
//         <div className="flex items-center space-x-6">
//           <h1 className="text-xl font-semibold text-gray-900">
//             Sign In or Register
//           </h1>

//           {/* Search */}
//           <div className="w-full max-w-sm">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-10 py-2 rounded-lg
//                   bg-gray-100 border border-gray-200
//                   text-gray-900 placeholder-gray-400
//                   focus:outline-none focus:ring-2 focus:ring-green-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT – Currency Selector */}
//         <div className="relative">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center gap-2 text-sm font-medium text-gray-700
//               border border-gray-200 rounded-lg px-3 py-2
//               hover:bg-gray-100 transition"
//           >
//             {selectedCurrency.label}
//             <ChevronDown className="w-4 h-4 text-gray-500" />
//           </button>

//           {isOpen && (
//             <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//               {currencies.map((currency) => (
//                 <button
//                   key={currency.code}
//                   onClick={() => {
//                     setSelectedCurrency(currency);
//                     setIsOpen(false);
//                   }}
//                   className={`w-full text-left px-4 py-2 text-sm
//                     hover:bg-gray-100
//                     ${
//                       selectedCurrency.code === currency.code
//                         ? "text-green-600 font-medium"
//                         : "text-gray-700"
//                     }`}
//                 >
//                   {currency.label}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// // import { Search } from "lucide-react";

// // function Header() {
// //   return (
// //     // Header
// //     <header className="bg-white border-b border-gray-200 px-6 py-4">
// //       <div className="flex items-center justify-between">
// //         {/* Left */}
// //         <div className="flex items-center space-x-4">
// //           <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100">
// //             {/* <Menu className="w-5 h-5" /> */}
// //           </button>

// //           <div>
// //             <h1 className="text-xl font-semibold text-gray-900">
// //               Sign In or Register
// //             </h1>
// //           </div>

// //           {/* Search */}
// //           <div className="w-full max-w-sm">
// //             <div className="relative">
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
// //               <input
// //                 type="text"
// //                 placeholder="Search..."
// //                 className="w-full pl-10 py-2 rounded-lg
// //               bg-gray-100 border border-gray-200
// //               text-gray-900 placeholder-gray-400
// //               focus:outline-none focus:ring-2 focus:ring-green-300"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Header;
