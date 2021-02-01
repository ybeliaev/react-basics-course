import React from "react";

function CaloriesTodoItem({ titleEating, calories, date, removeItem }) {
  return (
    <div className="d-flex w-50 mb-2 justify-content-between align-items-center  border border-1 rounded">
      <div className="ps-3">
        <small className="fs-6 text-muted">
          {date.toLocaleDateString("ru")} {date.toLocaleTimeString("ru")}
        </small>{" "}
        <br />
        <span className="fs-5">
          {titleEating} - {calories} kcal
        </span>
      </div>
      <div className="pe-3">
        <button
          className="btn lh-1 px-2 py-1 btn-secondary  onClick={()=>null}"
          onClick={() => removeItem(date)}
        >
          x
        </button>
      </div>
    </div>
  );
}
export default CaloriesTodoItem;
