export let users = [
  // Example user
  { id: 1, email: "user@example.com", password: "password123", role: "User" },
];

// Helper to find user by email
export const findUserByEmail = (email) => {
  return users.find((u) => u.email === email);
};

// Helper to add new user
export const addUser = ({ email, password, role }) => {
  const id = users.length + 1;
  const newUser = { id, email, password, role };
  users.push(newUser);
  return newUser;
};
