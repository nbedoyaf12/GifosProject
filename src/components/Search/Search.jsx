import React, { useContext, useEffect } from "react";
//Importing componentes
import Input from "./Input/Input";
//Importing icons
import searchIcon from "../../utils/icons/ilustra_header.svg";
//importing styles
import "./Search.styles.css";
//Importing Appcontext
import { AppContext } from "../../context/Appcontext";

function Search(props) {
  //Use useContext Hook to use values that are in the context
  const {
    string,
    setString,
    complete,
    setComplete,
    setResultsGifs
  } = useContext(AppContext);

  //Funcion to create the fetch for the autocomplte list
  function autocomplete(string) {
    return fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=zqAI9bVBu4sXeAa7U2dLJ4LEL7VvAy6A&q=${string}&limit=4&offset=0`
    );
  }

  //useEffect where is the petition and then save the info from the API in a state
  useEffect(() => {
    if (string.length > 0) {
      const handleString = () => {
        autocomplete(string)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setComplete(data.data);
          })
          .catch((error) => {
            setResultsGifs(`¡ERROR! Intenta de nuevo`);
          });
      };
      handleString();
    }
  }, [string]);

  return (
    <div className="searchContainer">
      <span className="text">
        ¡Inspirate y busca los mejores <b>GIFs</b>!
      </span>
      <img src={searchIcon} alt="Search Icon"></img>
      <Input />
      {/* //Rendering the autocomplete list */}
      <div className="list">
        {complete.map((e) => {
          const handleStringList = () => {
            setString(e.name);
          };
          return (
            <p key={e.analytics_response_payload} onClick={handleStringList}>
              {e.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
