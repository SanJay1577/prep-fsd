/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import { ViewNotex } from "../Pages/ViewNotex";

export const AppCtx = createContext(null);

export default function AppContext() {
  const [theme, setTheme] = useState("dark");
  //Three steps
  //1. Create an context
  //2. Make Publish and Subscribe with data
  //3. use the context
  return (
    <div>
      <AppCtx.Provider value={{ theme, setTheme }}>
        {/* subscriber */}
        <ViewNotex />
      </AppCtx.Provider>
    </div>
  );
}
