import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Profile from "./pages/Profile";
import SOS from "./pages/SOS";



function App() {
  const token = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sos" element={<SOS />} />
    </Routes>
  );
}

/* LOGIN */
function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return <Login onLogin={handleLogin} />;
}

/* DASHBOARD */
function Dashboard() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    navigate("/");
    return;
  }

  fetch("http://localhost:5000/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        localStorage.removeItem("token");
        navigate("/");
      }
    })
    .catch(() => {
      localStorage.removeItem("token");
      navigate("/");
    })
    .finally(() => {
      setLoading(false);   // ✅ ALWAYS runs
    });
}, []);
  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

return (
  <div style={{ display: "flex" }}>
    <Sidebar />

    <div style={{ marginLeft: "220px", padding: "20px" }}>
      <h1>📊 Dashboard</h1>

      <h3>Welcome 👋 {email}</h3>

      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
        style={{
          padding: "10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "8px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  </div>
);
}

/* PROFILE */
function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h1>👤 Profile</h1>
      </div>
    </div>
  );
}

/* SOS */
function SOS() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <h1>🚨 SOS</h1>
      </div>
    </div>
  );
}

export default App;