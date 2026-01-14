function HeaderActionButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-white/90 text-green-700 px-4 py-2 rounded-lg text-sm font-medium transition
        whitespace-nowrap
        ${
          active
            ? "text-green-700"
            : "text-gray-700 border border-slate-300 hover:bg-white/90"
        }`}
    >
      {label}
    </button>
  );
}

export default HeaderActionButton;
