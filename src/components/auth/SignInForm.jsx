// import { useState } from "react";
// import axios from "axios";

// function SignInForm({ onSuccess, onForgot, onSwitchToRegister }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/auth/signin",
//         { email, password },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       const { token, user } = res.data;

//       // Save token & role
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", user.role);

//       onSuccess(); // close modal
//     } catch (err) {
//       console.error(err.response?.data);
//       setError(err.response?.data?.error || "Something went wrong, try again");
//     }
//   };

//   return (
//     <form onSubmit={submit} className="space-y-4">
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="w-full pl-5 py-2 rounded-lg bg-gray-100 border border-slate-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
//       />
//       <input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type="password"
//         placeholder="Password"
//         className="w-full pl-5 py-2 rounded-lg bg-gray-100 border border-slate-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
//       />
//       {error && <p className="text-red-500 text-sm">{error}</p>}

//       <button
//         type="submit"
//         className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-200"
//       >
//         Sign In
//       </button>

//       <p className="text-sm text-gray-600 text-center">
//         <button
//           type="button"
//           onClick={onForgot}
//           className="text-green-600 font-medium hover:underline transition duration-150"
//         >
//           Forgot Password?
//         </button>
//       </p>

//       <p className="text-sm text-gray-600 text-center">
//         Don’t have an account?{" "}
//         <button
//           type="button"
//           onClick={onSwitchToRegister}
//           className="text-green-600 font-medium hover:underline transition duration-150"
//         >
//           Register
//         </button>
//       </p>
//     </form>
//   );
// }

// export default SignInForm;

import { useState } from "react";
import axios from "axios";

function SignInForm({ onSuccess, onForgot, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signin",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      onSuccess(); // close modal
    } catch (err) {
      console.error("Login error:", err.response?.data);
      setError(err.response?.data?.error || "Something went wrong, try again");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full pl-5 py-2 rounded-lg bg-gray-100 border border-slate-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full pl-5 py-2 rounded-lg bg-gray-100 border border-slate-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-200"
      >
        Sign In
      </button>
      <p className="text-sm text-gray-600 text-center">
        <button
          type="button"
          onClick={onForgot}
          className="text-green-600 font-medium hover:underline transition duration-150"
        >
          Forgot Password?
        </button>
      </p>
      <p className="text-sm text-gray-600 text-center">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="text-green-600 font-medium hover:underline transition duration-150"
        >
          Register
        </button>
      </p>
    </form>
  );
}

export default SignInForm;
