function HeaderActionButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition
        whitespace-nowrap
        ${
          active
            ? "bg-green-600 text-white"
            : "text-gray-700 border border-slate-300 hover:bg-gray-100"
        }`}
    >
      {label}
    </button>
  );
}

export default HeaderActionButton;
