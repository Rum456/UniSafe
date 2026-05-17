import Sidebar from "../Sidebar";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "30px",
        }}
      >
        <h1>📊 Dashboard</h1>

        <h2>Welcome to UniSafe 👋</h2>

        <div
          style={{
            background: "white",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px",
          }}
        >
          🚨 Emergency Status: Safe
        </div>

      </div>
    </div>
  );
}

export default Dashboard;