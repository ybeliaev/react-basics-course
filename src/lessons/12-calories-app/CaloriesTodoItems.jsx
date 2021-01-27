import React from "react";

export default function CaloriesTodoItems() {
  return (
    <div className="d-flex flex-row w-50 justify-content-between align-items-center  border border-1 rounded">
      <div className="ps-3">
        <small className="fs-6">Date</small> <br />
        <span className="fs-5">Breakfast - 900 kcal</span>
      </div>
      <div className="pe-3">
        <button className="btn btn-secondary lh-1 px-2 py-1 ">x</button>
      </div>
    </div>
  );
}
