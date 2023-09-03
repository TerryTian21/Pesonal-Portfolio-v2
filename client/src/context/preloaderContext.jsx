import React, { useState } from "react";

export const PreloaderContext = React.createContext();

export function PreloaderProvider({ children }) {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <PreloaderContext.Provider value={[showPreloader, setShowPreloader]}>
      {children}
    </PreloaderContext.Provider>
  );
}
