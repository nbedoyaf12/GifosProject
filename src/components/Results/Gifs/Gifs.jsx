import React from "react";

function Gifs(props) {
  //Rendering each gif
  return (
    <div className="resultsContainer">
      <a href={props.urlRedirect} target="__blank">
        <img src={props.urlRender} alt={props.alt} />
      </a>
    </div>
  );
}

export default Gifs;
