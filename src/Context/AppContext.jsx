/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";

const AppCtx = createContext(null);

export default function AppContext({ children }) {
  const initialData = {
    theme: "dark",
  };

  const [theme, setTheme] = useState("dark");
  //Three steps
  //1. Create an context
  //2. Make Publish and Subscribe with data
  //3. use the context
  return (
    <div>
      <AppCtx.Provider value={{ theme, setTheme }}>
        {/* subscriber */}
        {children}
      </AppCtx.Provider>
    </div>
  );
}

export function AppState() {
  return useContext(AppCtx);
}
