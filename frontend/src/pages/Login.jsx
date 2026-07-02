import { useState } from "react";
import axios from "axios";

function Login() {
  // Form state

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8001/api/token/", {
        username,
        password,
      });
      
      // Save access token
      localStorage.setItem("access", response.data.access);

      // Save refresh token
      localStorage.setItem("refresh", response.data.refresh);

      console.log("Login Success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
