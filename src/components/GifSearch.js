import React, { useState } from "react";

function GifSearch({ onSubmitQuery }) {
  
  const [query, setQuery] = useState("");  // Define state variables using the useState hook.Query stores the current search query, initialized as an empty string.

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitQuery(query); 
    console.log(query)        // Called the function passed via the "onSubmitQuery" prop & provide the current query as an argument.
  } 

  function handleChange(event) {  // Function to update the "query" state when the user types into the input field.
    setQuery(event.target.value); // Update the "query" state with the current input value.
  }
//   console.log(query)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="search">Enter a Search Term:</label>
          <input
            id="search"
            className="form-control"
            type="text"
            value={query}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Find Gifs
        </button>
      </form>
    </div>
  );
}

export default GifSearch;