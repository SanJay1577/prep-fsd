/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppCtx = createContext(null);

export default function AppContext({ children }) {
  const navigate = useNavigate();
  const initialData = {
    theme: "dark",
  };
  const [theme, setTheme] = useState("dark");
  const [userId, setUserId] = useState("1");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  //Three steps
  //1. Create an context
  //2. Make Publish and Subscribe with data
  //3. use the context
  return (
    <div>
      <AppCtx.Provider value={{ theme, setTheme, userId }}>
        {/* subscriber */}
        {children}
      </AppCtx.Provider>
    </div>
  );
}

export function AppState() {
  return useContext(AppCtx);
}
