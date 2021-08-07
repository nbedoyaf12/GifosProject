import React, { useContext, useEffect } from "react";
//Importing icons
import inputIcon from "../../../utils/icons/icon-search-mod-noc.svg";
//importing styles
import "./Input.styles.css";
//Importing Appcontext
import { AppContext } from "../../../context/Appcontext";

function Input(props) {
  //Use useContext Hook to use values that are in the context
  const {
    setData,
    setComplete,
    string,
    setString,
    button,
    setButton,
    setResultsGifs
  } = useContext(AppContext);

  //Funcion to create the fetch for the array with gifs
  function require(string) {
    return fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=zqAI9bVBu4sXeAa7U2dLJ4LEL7VvAy6A&q=${string}&limit=12&offset=0&rating=g&lang=en`
    );
  }

  //useEffect to do the petition to the API to get the array with gifs and save it in a state
  //Messages to the user according to the petition state
  useEffect(() => {
    if (button === true) {
      setResultsGifs("Tus Gifs están Cargando");
      const handleData = () => {
        require(string)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setData(data.data);
            data.data.length === 0
              ? setResultsGifs(`No se encontraron Gifs llamados ${string}`)
              : setResultsGifs(`Gifs con la palabra ${string}`);
          })
          .catch((error) => {
            setResultsGifs(`¡ERROR! Intenta de nuevo`);
          });
      };
      handleData();
      setButton(false);
      setComplete([]);
    }
  }, [button]);

  //Handle for the button to start the petition
  const handleButton = () => {
    setButton(!button);
  };

  //Handle to clear the autocomplete list once you
  // have selected the option that it gives you
  const handleDelete = () => {
    setTimeout(() => {
      setComplete([]);
    }, 200);
  };

  return (
    //rendering inut and button
    <div className="inputContainer">
      <input
        value={string}
        onChange={(e) => setString(e.target.value)}
        type="text"
        className="input"
        placeholder="Busca Gifs"
        onBlur={handleDelete}
      />
      <button type="submit" className="inputIcon" onClick={handleButton}>
        <img src={inputIcon} alt="Input Icon"></img>
      </button>
    </div>
  );
}

export default Input;
