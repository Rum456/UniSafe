import { useNavigate } from "react-router-dom"

function Sidebar() {
  const navigate = useNavigate()

  return (
    <div style={styles.sidebar}>
      <h2 style={{ color: "white" }}>🚀 UniSafe</h2>

      <button style={styles.btn} onClick={() => navigate("/dashboard")}>
        📊 Dashboard
      </button>

      <button style={styles.btn} onClick={() => navigate("/profile")}>
        👤 Profile
      </button>

      <button style={styles.btn} onClick={() => navigate("/sos")}>
        🚨 SOS
      </button>

     <button
  style={styles.logout}
  onClick={() => {
    localStorage.removeItem("token")
    navigate("/")
  }}
>
  🚪 Logout
</button>
    </div>
  )
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#0f172a",
    padding: "20px",
    position: "fixed",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    boxSizing: "border-box",
  },

  btn: {
    padding: "10px",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  logout: {
    padding: "10px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "auto",
  },
}
export default Sidebar