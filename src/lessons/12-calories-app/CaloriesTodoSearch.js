import React, { useState } from "react";

function CaloriesTodoSearch({ setSearchWord, searchWord }) {
  return (
    <div className="row mb-3">
      <div className="col-sm-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search.."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
      </div>
    </div>
  );
}
export default CaloriesTodoSearch;
