import { X } from "lucide-react";
import { useState, useEffect } from "react";

function AuthModal({ initialType = "Sign In", onClose }) {
  const [mode, setMode] = useState(initialType);
  const [animate, setAnimate] = useState(false);

  const isSignIn = mode === "Sign In";
  const isRegister = mode === "Register";
  const isForgot = mode === "Forgot";

  useEffect(() => {
    // setMode(initialType);
    setTimeout(() => setAnimate(true), 10);
  }, [initialType]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 transition-opacity duration-300"
      />

      {/* Modal */}
      <div
        className={`
          relative bg-white w-full max-w-md rounded-xl shadow-xl p-6
          transform transition-all duration-300
          ${animate ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Animated content */}
        <div
          key={mode}
          className="transition-all duration-300 animate-fadeSlide"
        >
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {isForgot
              ? "Reset your password"
              : isSignIn
              ? "Sign In"
              : "Register"}
          </h2>

          {/* FORM */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2
                focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {!isForgot && (
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            )}

            {isRegister && (
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-full
                hover:bg-green-700 transition"
            >
              {isForgot
                ? "Send password reset link"
                : isSignIn
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-sm text-center space-y-2">
            {isSignIn && (
              <>
                <button
                  onClick={() => setMode("Forgot")}
                  className="text-green-600 hover:underline"
                >
                  Forgot password?
                </button>
                <p className="text-gray-600">
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setMode("Register")}
                    className="text-green-600 font-medium hover:underline"
                  >
                    Register
                  </button>
                </p>
              </>
            )}

            {isRegister && (
              <p className="text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => setMode("Sign In")}
                  className="text-green-600 font-medium hover:underline"
                >
                  Sign In
                </button>
              </p>
            )}

            {isForgot && (
              <button
                onClick={() => setMode("Sign In")}
                className="text-green-600 hover:underline"
              >
                Back to Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
