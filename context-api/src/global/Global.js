import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [state,setState]=useState("Ruqeyya");
  return (
    <GlobalContext.Provider
      value={{ name: state, id: 1, link: ["About", "Contact", "Map"],setState }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
