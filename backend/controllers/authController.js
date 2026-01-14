// import jwt from "jsonwebtoken";
// import { findUserByEmail, addUser } from "../utils/users.js";

// const JWT_SECRET = process.env.JWT_SECRET;
// console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

// // POST /api/auth/register
// export const register = (req, res) => {
//   const { email, password, role } = req.body;

//   if (!email || !password || !role) {
//     return res.status(400).json({
//       error: "Email, password and role are required",
//     });
//   }

//   if (findUserByEmail(email)) {
//     return res.status(400).json({ error: "User already exists" });
//   }

//   const newUser = addUser({ email, password, role });

//   return res.status(201).json({
//     message: "User registered successfully",
//     user: {
//       email: newUser.email,
//       role: newUser.role,
//     },
//   });
// };

// // POST /api/auth/signin
// export const signin = (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       error: "Email and password are required",
//     });
//   }

//   const user = findUserByEmail(email);

//   if (!user || user.password !== password) {
//     return res.status(401).json({
//       error: "Invalid credentials",
//     });
//   }

//   if (!JWT_SECRET) {
//     return res.status(500).json({
//       error: "JWT_SECRET is missing on server",
//     });
//   }

//   const token = jwt.sign(
//     { id: user.id, email: user.email, role: user.role },
//     JWT_SECRET,
//     { expiresIn: "1h" }
//   );

//   return res.json({
//     message: "Sign In successful",
//     token,
//     user: {
//       email: user.email,
//       role: user.role,
//     },
//   });
// };

import { findUserByEmail, addUser } from "../utils/users.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const jwt = require("jsonwebtoken");

console.log("JWT_SECRET loaded:", !!process.env.JWT_SECRET);

export const register = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({
      error: "Email, password and role are required",
    });
  }

  const existingUser = findUserByEmail(email);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = addUser({ email, password, role });

  return res.status(201).json({
    message: "User registered successfully",
    user: newUser,
  });
};

export const signin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required",
    });
  }

  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({
      error: "Invalid credentials",
    });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      error: "JWT_SECRET is missing on server",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET, // ✅ USE DIRECTLY
    { expiresIn: "1h" }
  );

  return res.json({
    message: "Sign in successful",
    token,
    user: {
      email: user.email,
      role: user.role,
    },
  });
};
