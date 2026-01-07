import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Membership from "./pages/Membership";

function App() {
  return (
    <Router>
      <Routes>
        {/* MAIN APP LAYOUT */}
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="admin" element={<Admin />} />
          <Route path="membership" element={<Membership />} />
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
