import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentToken, setCurrentToken] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  function login(token) {
    setCurrentToken(token);
    setIsAuth(true);
  }

  const value = {
    login,
    currentToken,
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
