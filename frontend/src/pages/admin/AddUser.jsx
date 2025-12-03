import { useState } from "react";
import InputField from "../../components/InputField";
import authAPI from "../../api/authAPI";

const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "user"
  });

  const [message, setMessage] = useState("");

  const updateForm = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await authAPI.adminCreateUser(form);
      setMessage("User created successfully!");
    } catch (err) {
      setMessage("Error creating user");
    }
  };

  return (
    <div className="page-container">
      <h2>Add New User</h2>

      <form className="simple-form" onSubmit={handleAddUser}>
        <InputField label="Name" value={form.name} onChange={(v) => updateForm("name", v)} />

        <InputField label="Email" type="email" value={form.email} onChange={(v) => updateForm("email", v)} />

        <InputField label="Address" value={form.address} onChange={(v) => updateForm("address", v)} />

        <InputField label="Password" type="password" value={form.password} onChange={(v) => updateForm("password", v)} />

        <label>Role</label>
        <select value={form.role} onChange={(e) => updateForm("role", e.target.value)}>
          <option value="user">Normal User</option>
          <option value="admin">Admin</option>
          <option value="owner">Store Owner</option>
        </select>

        {message && <p>{message}</p>}

        <button className="btn-primary">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
