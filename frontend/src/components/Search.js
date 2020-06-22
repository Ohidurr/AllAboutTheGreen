import React from "react";

const Search = ({ value, setSearch, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="searchForm">
        <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"Search Plant"}
        />
      <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Search;
