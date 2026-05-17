import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";


function Sidebar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#0f172a",
        padding: "20px",
        color: "white",
      }}
    >
      <h2>🚀 UniSafe</h2>

      <button onClick={() => navigate("/dashboard")}>
        Dashboard
      </button>

      <br /><br />

      <button onClick={() => navigate("/profile")}>
        Profile
      </button>

      <br /><br />

      <button onClick={() => navigate("/sos")}>
        SOS
      </button>


      <br /><br />

<button
  style={{
    width: "100%",
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
  onClick={() => {
    localStorage.removeItem("token");
    navigate("/");
  }}
>
  Logout
</button>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px" }}>
        <h1>📊 Dashboard Working ✅</h1>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px" }}>
        <h1>👤 Profile Working ✅</h1>
      </div>
    </div>
  );
}

function SOS() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px" }}>
        <h1>🚨 SOS Working ✅</h1>
      </div>
    </div>
  );
}

function AppRoutes() {
  return (
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
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;