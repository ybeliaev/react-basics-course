import React from "react";

const CaloriesTodoForm = () => {
  return (
    <form className="row gy-2 gx-3 mb-3 align-items-center">
      <div className="col-md-2">
        <label className="visually-hidden" htmlFor="autoSizingSelect">
          Preference
        </label>
        <select className="form-select" id="autoSizingSelect">
          <option value="1" selected>
            Dinner
          </option>
          <option value="2">Breakfast</option>
          <option value="3">Lunch</option>
        </select>
      </div>
      <div className="col-md-2">
        <label className="visually-hidden" htmlFor="autoSizingInput">
          Name
        </label>
        <input type="date" className="form-control" id="autoSizingInput" />
      </div>
      <div className="col-md-2">
        <label className="visually-hidden" htmlFor="autoSizingInputGroup">
          Username
        </label>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="autoSizingInputGroup"
            placeholder="700"
          />
          <div className="input-group-text">kcal</div>
        </div>
      </div>

      <div className="col-md-2">
        <button type="button" className="btn btn-primary">
          ADD
        </button>
      </div>
    </form>
  );
};

export default CaloriesTodoForm;
