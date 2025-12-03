import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin} className="auth-form">
        <InputField
          label="Email"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={setEmail}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={setPassword}
        />

        {error && <p className="error">{error}</p>}

        <button className="btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
