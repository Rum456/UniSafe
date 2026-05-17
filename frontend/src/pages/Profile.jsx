import Sidebar from "../Sidebar";

function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "30px",
        }}
      >
        <h1>👤 Profile</h1>

        <p>Name: Admin User</p>
        <p>Email: admin@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;