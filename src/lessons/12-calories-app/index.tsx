import React from "react";

export default function Lesson12() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 12</h3>
      <h4>ПРОЕКТ CALORIES-APP</h4>
      <h4>Food Diary</h4>
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
      <div className="row">
        <div className="col-sm-4">
          <input type="text" className="form-control" />
        </div>
        <div className="row align-items-center">
          <div className="col-sm-3">
            <small className="fs-6">Date</small> <br />
            <span className="fs-5">Breakfast - 900kcal</span>
          </div>
          <div className="col">
            <button className="btn btn-secondary lh-1 px-2 py-1 ">x</button>
          </div>
        </div>
      </div>
    </div>
  );
}
