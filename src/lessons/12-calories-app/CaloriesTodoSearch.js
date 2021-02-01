import React, { useState } from "react";

function CaloriesTodoSearch({ searchItem }) {
  let [searchWord, setSearchWord] = useState("");

  function searchItem(e) {
    setSearchWord(e.target.value);
  }

  return (
    <div className="row mb-3">
      <div className="col-sm-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search.."
          value={searchWord}
          onChange={searchItem}
        />
      </div>
    </div>
  );
}
export default CaloriesTodoSearch;
