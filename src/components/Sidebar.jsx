import { sidebarData } from "../data/sidebarData";
import LOGO from "../images/logo.jpeg";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <img src={LOGO} alt="Logo" className="w-auto" />

      <nav className="space-y-2">
        {sidebarData.map((item) => (
          <button
            key={item.id}
            className={`w-full px-3 py-2 rounded-lg text-sm text-left
              ${
                item.active
                  ? "bg-sky-100 text-sky-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

// function Sidebar() {
//   return (
//     <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
//       {/* Logo */}
//       <div className="p-6">
//         <div className="flex items-center space-x-3">
//           <img src={LOGO} alt="Logo" className="w-auto" />
//           <div></div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 px-4 space-y-2">
//         <button
//           className="w-full flex items-center px-3 py-2 rounded-lg text-sm
//           bg-green-100 text-green-700"
//         >
//           Dashboard
//         </button>

//         <button
//           className="w-full flex items-center px-3 py-2 rounded-lg text-sm
//           text-gray-600 hover:bg-gray-100"
//         >
//           Analytics
//         </button>
//       </nav>

//       {/* User */}
//       <div className="p-4 border-t border-gray-200">
//         <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-100">
//           <img
//             src="/src/images/user.png"
//             alt="User"
//             className="w-9 h-9 rounded-full"
//           />
//           <div>
//             <p className="text-sm font-medium text-gray-900">Alex Johnson</p>
//             <p className="text-xs text-gray-500">Administrator</p>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

// export default Sidebar;
