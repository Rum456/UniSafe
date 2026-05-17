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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>🚀 UniSafe</h2>

      <button onClick={() => navigate("/dashboard")}>
        Dashboard
      </button>

      <br />

      <button onClick={() => navigate("/profile")}>
        Profile
      </button>

      <br />

      <button onClick={() => navigate("/sos")}>
        SOS
      </button>

      <div style={{ marginTop: "auto" }}>
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
    </div>
  );
}