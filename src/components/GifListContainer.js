import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  // Define state variables using the useState hook.
  // "gifs" stores an array of gifs.
  // "query" stores the current search query, initialized with "dolphins".
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("coding");
  useEffect(() => {   // Fetch gifs from the Giphy API using the provided query in search.
    fetch(            // Extract the gif URLs from the fetched data and update the "gifs" state.
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=SvOYmr68PXfrynsBoCfUif57iixmRpo0`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch onSubmitQuery={setQuery} />
    </div>
  );
}

export default GifListContainer;