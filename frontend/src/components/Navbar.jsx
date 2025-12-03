import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Store Rating System</Link>
      </div>

      <div className="nav-right">
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {user && (
          <>
            {user.role === "admin" && <Link to="/admin">Dashboard</Link>}
            {user.role === "user" && <Link to="/user">Dashboard</Link>}
            {user.role === "owner" && <Link to="/owner">Dashboard</Link>}
            <button onClick={logout} className="logout-btn">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
