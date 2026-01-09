import { useState } from "react";

function RegisterForm({ onSuccess, onSwitchToSignIn }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirm) {
      setError("All fields required");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }

    console.log("REGISTER", form);
    onSuccess();
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full pl-5 py-2 rounded-lg
                  bg-gray-100 border border-slate-300
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-green-300"
      />

      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full pl-5 py-2 rounded-lg
                  bg-gray-100 border border-slate-300
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-green-300"
      />

      <input
        type="password"
        placeholder="Confirm password"
        value={form.confirm}
        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
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
        Create Account
      </button>

      {/* Register link */}
      <p className="text-sm text-gray-600 text-center">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToSignIn}
          className="text-green-600 font-medium hover:underline transition duration-150"
        >
          Sign In
        </button>
      </p>
    </form>
  );
}

export default RegisterForm;
