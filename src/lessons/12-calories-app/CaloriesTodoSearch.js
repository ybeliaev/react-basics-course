import React from "react";

function CaloriesTodoSearch() {
  return (
    <div className="row mb-3">
      <div className="col-sm-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search.."
          onChange={(e) => console.log("search", e.target.value)}
        />
      </div>
    </div>
  );
}
export default CaloriesTodoSearch;
