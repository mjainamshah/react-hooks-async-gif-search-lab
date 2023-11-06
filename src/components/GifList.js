import React from "react";

function GifList({ gifs }) { // GifList is a functional component that receives a prop "gifs"
  return (                   // It renders a list of gifs using the data provided in the "gifs" prop.

    <ul>   {/* We use the .map() method to iterate over each gif in the "gifs" array */}
      {gifs.map((gif) => (   
        <li key={gif.url}>
          <img src={gif.url} alt="gif" />
        </li> 
      ))}  {/* Each gif is displayed within a list item (li) */}
    </ul>
  );
}

export default GifList;