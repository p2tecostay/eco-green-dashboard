// import { useState } from "react";
// import axios from "axios";

// const roles = ["User", "Admin", "Member"];

// function RegisterForm({ onSuccess, onSwitchToSignIn }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [role, setRole] = useState("User"); // <-- default role
//   const [error, setError] = useState("");

//   const submit = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (!email || !password || !confirmPassword || !role) {
//       setError("All fields are required");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/register", {
//         email,
//         password,
//         role, // <-- send role to backend
//       });

//       console.log("User created:", res.data.user);
//       onSuccess();
//     } catch (err) {
//       console.error(err);
//       setError(err.response?.data?.error || "Something went wrong, try again");
//     }
//   };

//   return (
//     <form onSubmit={submit} className="space-y-4">
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="w-full pl-5 py-2 rounded-lg
//                   bg-gray-100 border border-slate-300
//                   text-gray-900 placeholder-gray-400
//                   focus:outline-none focus:ring-2 focus:ring-green-300"
//       />

//       <input
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         type="password"
//         placeholder="Password"
//         className="w-full pl-5 py-2 rounded-lg
//                   bg-gray-100 border border-slate-300
//                   text-gray-900 placeholder-gray-400
//                   focus:outline-none focus:ring-2 focus:ring-green-300"
//       />

//       <input
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         type="password"
//         placeholder="Confirm Password"
//         className="w-full pl-5 py-2 rounded-lg
//                   bg-gray-100 border border-slate-300
//                   text-gray-900 placeholder-gray-400
//                   focus:outline-none focus:ring-2 focus:ring-green-300"
//       />

//       {/* Role selector */}
//       <select
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//         className="w-full pl-2 py-2 rounded-lg border border-gray-300 text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300"
//       >
//         {roles.map((r) => (
//           <option key={r} value={r}>
//             {r}
//           </option>
//         ))}
//       </select>

//       {error && <p className="text-red-500 text-sm">{error}</p>}

//       <button
//         type="submit"
//         className="w-full bg-green-600 text-white py-2 rounded-full
//                    hover:bg-green-700 hover:scale-105 transition-all duration-200"
//       >
//         Register
//       </button>

//       <p className="text-sm text-gray-600 text-center">
//         Already have an account?{" "}
//         <button
//           type="button"
//           onClick={onSwitchToSignIn}
//           className="text-green-600 font-medium hover:underline transition duration-150"
//         >
//           Sign In
//         </button>
//       </p>
//     </form>
//   );
// }

// export default RegisterForm;

import { useState } from "react";
import axios from "axios";

const roles = ["User", "Admin", "Member"];

function RegisterForm({ onSuccess, onSwitchToSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("User"); // default role
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
        role,
      });

      console.log("User registered:", res.data.user);

      // Save role in localStorage for automatic sign-in reference
      localStorage.setItem("role", res.data.user.role);

      onSuccess(); // close modal
    } catch (err) {
      console.error(err);
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
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm Password"
        className="w-full pl-5 py-2 rounded-lg bg-gray-100 border border-slate-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      />

      {/* Role selection */}
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 hover:scale-105 transition-all duration-200"
      >
        Register
      </button>

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
