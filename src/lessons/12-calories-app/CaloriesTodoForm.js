import { createMuiTheme } from "@material-ui/core";
import React, { useState } from "react";

const CaloriesTodoForm = ({ createItem }) => {
  let [titleEating, setTitleEating] = useState("Breakfast");
  let [date, setDate] = useState(new Date());
  let [calories, setCalories] = useState(500);
  return (
    <form className="row gy-2 gx-3 mb-3 align-items-center">
      <div className="col-md-2">
        <label className="visually-hidden" htmlFor="autoSizingSelect">
          {titleEating}
        </label>
        <select
          className="form-select"
          id="autoSizingSelect"
          onChange={(e) => setTitleEating(e.target.value)}
        >
          <option value="Breakfast" selected>
            Breakfast
          </option>
          <option value="Dinner">Dinner</option>
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
          onChange={(e) => setDate(new Date(e.target.value))}
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
            placeholder={calories}
            onChange={(e) => parseInt(setCalories(e.target.value))}
          />
          <div className="input-group-text">kcal</div>
        </div>
      </div>

      <div className="col-md-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => createItem(titleEating, calories, date)}
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default CaloriesTodoForm;
