import { useState } from "react";

function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  return (
    <>
      <input
        type="text"
        placeholder="Full name"
        className="w-full mb-3 border rounded px-3 py-2"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-3 border rounded px-3 py-2"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-3 border rounded px-3 py-2"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <input
        type="password"
        placeholder="Confirm password"
        className="w-full mb-4 border rounded px-3 py-2"
        value={form.confirm}
        onChange={(e) => setForm({ ...form, confirm: e.target.value })}
      />

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
        Create account
      </button>
    </>
  );
}

export default RegisterForm;
