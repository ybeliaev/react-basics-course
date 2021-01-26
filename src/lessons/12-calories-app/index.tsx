import React from "react";

export default function Lesson12() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 12</h3>
      <h4>ПРОЕКТ CALORIES-APP</h4>
      <h4>Food Diary</h4>
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-auto">
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
        <div className="col-auto">
          <label className="visually-hidden" htmlFor="autoSizingInput">
            Name
          </label>
          <input
            type="date"
            className="form-control"
            id="autoSizingInput"
            placeholder="Date"
          />
        </div>
        <div className="col-auto">
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

        <div className="col-auto">
          <button type="button" className="btn btn-primary">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}
