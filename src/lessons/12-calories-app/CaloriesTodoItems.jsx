import React from "react";

export default function CaloriesTodoItems() {
  return (
    <div className="row">
      <div className="row align-items-center">
        <div className="col-sm-3">
          <small className="fs-6">Date</small> <br />
          <span className="fs-5">Breakfast - 900 kcal</span>
        </div>
        <div className="col">
          <button className="btn btn-secondary lh-1 px-2 py-1 ">x</button>
        </div>
      </div>
    </div>
  );
}
