import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log("Response received");

      // ✅ SAFE RESPONSE HANDLING (IMPORTANT FIX)
      const text = await response.text();
      console.log("RAW TEXT:", text);

      const data = JSON.parse(text);
      console.log("PARSED DATA:", data);

      console.log("STATUS:", response.status);
      console.log("TOKEN:", data.token);

      // ✅ SAVE TOKEN
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("TOKEN SAVED:", data.token);

        alert("Login successful");
        onLogin();
      } else {
        console.log("NO TOKEN RECEIVED");
        alert(data.message || "Login failed");
      }

    } catch (error) {
      console.log("ERROR:", error);
      alert("Server not reachable");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>🔐 UniSafe Login</h1>

        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "white",
  },
  box: {
    padding: "30px",
    background: "#1e293b",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
  },
  button: {
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Login;