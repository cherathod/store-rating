import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login({ email, password });
      navigate("/"); // Redirect to homepage on success
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <InputField
          label="Email"
          type="email"
          value={email}
          placeholder="Enter email"
          onChange={(value) => setEmail(value)}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          placeholder="Enter password"
          onChange={(value) => setPassword(value)}
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
