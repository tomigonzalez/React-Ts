import React, { useState } from "react";

export const Context = React.createContext({});

export default function ContextProvider({ children }: any) {
  const [showFooter, setShowFooter] = useState(true);

  return (
    <Context.Provider value={{ showFooter, setShowFooter }}>
      {children}
    </Context.Provider>
  );
}
