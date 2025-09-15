import { useState } from "react";

const SearchAndFilterComponent = (props) => {
  // Accept a prop from parent for the filter function
  const { onFilterTopRated, onSearchTermChange } = props;
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search-bar-container">
      <button
        className="filter-btn"
        onClick={onFilterTopRated} // Call parent function on click
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-filter"
          viewBox="0 0 16 16"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
        </svg>{" "}
        Top Restaurants
      </button>
      <input
        id="search-input"
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={(e) => {
          onSearchTermChange(e);
          setSearchTerm(e.target?.value);
        }}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchAndFilterComponent;
