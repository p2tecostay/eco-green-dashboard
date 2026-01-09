import { useState } from "react";

function ForgotPasswordForm({ onBack }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email required");
      return;
    }

    console.log("RESET PASSWORD:", email);
    onBack();
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full pl-5 py-2 rounded-lg
                  bg-gray-100 border border-slate-300
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-green-300"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        className="w-full bg-green-600 text-white py-2 rounded-full
                   hover:bg-green-700 hover:scale-105 transition-all duration-200"
      >
        Send reset link
      </button>

      <p className="text-sm text-gray-600 text-center">
        <button
          type="button"
          onClick={onBack}
          className="text-green-600 font-medium hover:underline transition duration-150"
        >
          Back to Sign In
        </button>
      </p>
    </form>
  );
}

export default ForgotPasswordForm;
