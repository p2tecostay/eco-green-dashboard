import { X } from "lucide-react";

function AuthModal({ open, title, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-black/40" />

      <div className="relative bg-white w-full max-w-md rounded-xl p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-6">{title}</h2>

        {children}
      </div>
    </div>
  );
}

export default AuthModal;
