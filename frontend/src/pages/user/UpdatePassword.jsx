import { useState } from "react";
import authAPI from "../../api/authAPI";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await authAPI.updatePassword(password);
      setMsg("Password updated successfully");
    } catch {
      setMsg("Failed to update password");
    }
  };

  return (
    <div className="page-container">
      <h2>Update Password</h2>

      <form className="simple-form" onSubmit={handleUpdate}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary">Update</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
};

export default UpdatePassword;
