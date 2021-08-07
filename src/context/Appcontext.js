import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  //Hooks
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data, setData] = useState([]);
  const [button, setButton] = useState(false);
  const [string, setString] = useState("");
  const [complete, setComplete] = useState([]);
  const [resultsGifs, setResultsGifs] = useState("Ingrese el nombre de un Gif");

  return (
    // Sending states and sets to the provider
    <AppContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        data,
        setData,
        string,
        setString,
        resultsGifs,
        setResultsGifs,
        button,
        setButton,
        complete,
        setComplete
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
