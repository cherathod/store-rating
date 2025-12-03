import { useEffect, useState } from "react";
import DataTable from "../../components/DataTable";
import authAPI from "../../api/authAPI";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    role: ""
  });

  useEffect(() => {
    authAPI.getAll().then((res) => setUsers(res));
  }, []);

  const filteredUsers = users.filter((u) => {
    return (
      u.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      u.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      u.role.toLowerCase().includes(filters.role.toLowerCase())
    );
  });

  return (
    <div className="page-container">
      <h2>User List</h2>

      <div className="filter-row">
        <input
          placeholder="Name"
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={filters.email}
          onChange={(e) => setFilters({ ...filters, email: e.target.value })}
        />
        <input
          placeholder="Role"
          value={filters.role}
          onChange={(e) => setFilters({ ...filters, role: e.target.value })}
        />
      </div>

      <DataTable
        columns={[
          { label: "Name", field: "name" },
          { label: "Email", field: "email" },
          { label: "Address", field: "address" },
          { label: "Role", field: "role" }
        ]}
        data={filteredUsers}
      />
    </div>
  );
};

export default UserList;
