import React, { useContext } from "react";
//Import Appcontext
import { AppContext } from "../../context/Appcontext";

function Button(props) {
  //Use useContext Hook to use values that are in the context
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);
  return (
    //Dynamic button for the dark and light mood
    <div>
      <button
        onClick={() => {
          setIsDarkMode(!isDarkMode);
        }}
        type="submit"
        className="btn-theme"
      >
        MODO {isDarkMode ? "LIGHT" : "DARK"}
      </button>
    </div>
  );
}

export default Button;
