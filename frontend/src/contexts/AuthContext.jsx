import { createContext, useEffect, useState } from "react";
import authAPI from "../api/authAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // {id, name, email, role}
  const [token, setToken] = useState(localStorage.getItem("authToken") || "");
  const [loading, setLoading] = useState(true);

  // Load user from token on refresh
  useEffect(() => {
    const loadUser = async () => {
      try {
        if (token) {
          const res = await authAPI.getMe();
          setUser(res.user);
        }
      } catch (err) {
        console.error("Token invalid or expired");
        logout();
      }
      setLoading(false);
    };
    loadUser();
  }, [token]);

  const login = async (email, password) => {
    const res = await authAPI.login(email, password);

    localStorage.setItem("authToken", res.token);
    setToken(res.token);
    setUser(res.user);
  };

  const register = async (formData) => {
    return await authAPI.register(formData);
  };

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
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
