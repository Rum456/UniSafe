import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SOS from "./pages/SOS";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Login
              onLogin={() => {
                window.location.href = "/dashboard";
              }}
            />
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/sos" element={<SOS />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;