import { useNavigate } from "react-router-dom";

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
        position: "fixed",
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

export default Sidebar;