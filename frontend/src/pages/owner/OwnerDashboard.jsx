import { Link } from "react-router-dom";

const OwnerDashboard = () => {
  return (
    <div className="page-container">
      <h2>Store Owner Dashboard</h2>

      <div className="dashboard-links">
        <Link to="/owner/ratings" className="dash-card">View Store Ratings</Link>
        <Link to="/owner/update-password" className="dash-card">Update Password</Link>
      </div>
    </div>
  );
};

export default OwnerDashboard;
