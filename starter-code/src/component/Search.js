import React from "react";

const Search = ({handleSearch, clearSearch}) => {
  return (
    <div>
      <input
      onClick={clearSearch}
      onChange={handleSearch}
        id="search"
        name="search"
        placeholder="Search food"
        style={{ width: "50%" }}
      />
    </div>
  );
}

export default Search