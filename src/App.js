import React, { useContext } from "react";
//Importing componentes and styles
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Search from "./components/Search/Search";
import "./styles.css";
//Importing Appcontext
import { AppContext } from "./context/Appcontext";

export default function App() {
  //Use useContext Hook to use a value that is in the context
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <Search />
      <Results />
    </div>
  );
}
