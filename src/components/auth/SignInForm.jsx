import { useState } from "react";

function SignInForm() {
  const [forgot, setForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {!forgot ? (
        <>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-2 border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={() => setForgot(true)}
            className="text-sm text-green-600 hover:underline mb-4"
          >
            Forgot password?
          </button>

          <button
            type="button"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
          >
            Sign In
          </button>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-3">
            Enter your email and we’ll send you a reset link.
          </p>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold">
            Send Reset Link
          </button>

          <button
            onClick={() => setForgot(false)}
            className="mt-3 text-sm text-gray-500 hover:underline"
          >
            Back to sign in
          </button>
        </>
      )}
    </>
  );
}

export default SignInForm;
