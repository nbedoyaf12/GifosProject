import React, { useContext } from "react";
//Importing componentes
import Gifs from "./Gifs/Gifs";
//importing styles
import "./Results.styles.css";
//Importing Appcontext
import { AppContext } from "../../context/Appcontext";

function Results(props) {
  //Use useContext Hook to use values that are in the context
  const { data, isDarkMode, resultsGifs } = useContext(AppContext);

  return (
    <div className="resultsContainer">
      {/* //Showing with the resultsGifs state a message
      // it would be: write the name of the gif, loaging, results or error  */}
      <div className="results">{resultsGifs}</div>
      <div
        className={`resultsGifs ${isDarkMode ? "resultsDark" : "resultsLight"}`}
      >
        {/* //Sending props for each gif */}
        {data.map((e) => (
          <Gifs
            key={e.id}
            urlRedirect={e.url}
            urlRender={e.images.downsized.url}
            alt={e.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Results;
