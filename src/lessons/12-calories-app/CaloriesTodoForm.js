import React from "react";

const CaloriesTodoForm = () => {
  return (
    <form className="row gy-2 gx-3 mb-3 align-items-center">
      <div className="col-md-2">
        <label className="visually-hidden" htmlFor="autoSizingSelect">
          Preference
        </label>
        <select
          className="form-select"
          id="autoSizingSelect"
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="Dinner" selected>
            Dinner
          </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
        </select>
      </div>
      <div className="col-md-2">
        <label className="visually-hidden" htmlFor="autoSizingInput">
          Name
        </label>
        <input
          type="date"
          className="form-control"
          id="autoSizingInput"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="col-md-2">
        <label className="visually-hidden" htmlFor="autoSizingInputGroup">
          Username
        </label>
        <div className="input-group">
          <input
            type="number"
            min="100"
            max="2000"
            step="100"
            className="form-control"
            id="autoSizingInputGroup"
            placeholder="700"
            onChange={(e) => console.log(e.target.value)}
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
