import React, { useContext } from "react";
//Importing componentes
import Button from "../Button/Button";
//Importing icons
import headerIcon from "../../utils/icons/logo-desktop.svg";
import headerDarkIcon from "../../utils/icons/logo-mobile-modo-noct.svg";
//importing styles
import "./Header.styles.css";
//Importing Appcontext
import { AppContext } from "../../context/Appcontext";

function Header(children) {
  //Use useContext Hook to use values that are in the context
  const { isDarkMode, handleTheme } = useContext(AppContext);

  return (
    //Changing the icons depending on the dark or light mood
    <div className="headerContainer">
      <img
        src={isDarkMode ? headerDarkIcon : headerIcon}
        alt="desktop icon"
      ></img>
      <Button onClick={handleTheme}></Button>
    </div>
  );
}

export default Header;
