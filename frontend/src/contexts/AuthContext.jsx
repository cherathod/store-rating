import { createContext, useEffect, useState } from "react";
import authAPI from "../api/authAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");
  const [loading, setLoading] = useState(true);

  // Load user profile if token exists
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await authAPI.getProfile();
        setUser(res.data.user);
      } catch (err) {
        console.error("Token invalid or expired:", err);
        logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  // LOGIN
  const login = async ({ email, password }) => {
    try {
      const res = await authAPI.login({ email, password });
      localStorage.setItem("authToken", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    } catch (err) {
      throw err; // allow UI to handle error
    }
  };

  // REGISTER
  const register = async (data) => {
    const res = await authAPI.register(data);
    return res.data;
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("authToken");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
