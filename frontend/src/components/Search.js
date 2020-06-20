import React from "react";

const Search = ({ value, setSearch, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={"Search Plant"}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Search;
