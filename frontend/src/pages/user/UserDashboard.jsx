import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="page-container">
      <h2>User Dashboard</h2>

      <div className="dashboard-links">
        <Link to="/user/stores" className="dash-card">Browse Stores</Link>
        <Link to="/user/update-password" className="dash-card">Update Password</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
