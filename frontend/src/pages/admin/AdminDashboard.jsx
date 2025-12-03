import { useEffect, useState } from "react";
import storeAPI from "../../api/storeAPI";
import userAPI from "../../api/authAPI";
import ratingAPI from "../../api/ratingAPI";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    stores: 0,
    ratings: 0
  });

  useEffect(() => {
    const loadStats = async () => {
      const userCount = await userAPI.count();
      const storeCount = await storeAPI.count();
      const ratingCount = await ratingAPI.count();

      setStats({
        users: userCount.total,
        stores: storeCount.total,
        ratings: ratingCount.total
      });
    };

    loadStats();
  }, []);

  return (
    <div className="page-container">
      <h2>Admin Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.users}</p>
        </div>

        <div className="stat-card">
          <h3>Total Stores</h3>
          <p>{stats.stores}</p>
        </div>

        <div className="stat-card">
          <h3>Total Ratings</h3>
          <p>{stats.ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
