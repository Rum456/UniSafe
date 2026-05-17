import Sidebar from "../Sidebar";

function SOS() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "30px",
        }}
      >
        <h1>🚨 SOS Emergency</h1>

        <button
          style={{
            background: "red",
            color: "white",
            padding: "15px",
            border: "none",
            borderRadius: "10px",
          }}
        >
          SEND SOS ALERT
        </button>
      </div>
    </div>
  );
}

export default SOS;