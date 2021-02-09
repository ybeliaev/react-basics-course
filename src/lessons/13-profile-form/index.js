import React from "react";

export default function Lesson13() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 13</h3>
      <h4>Profile Form</h4>
      <form className="w-50 fs-5">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Username
          </label>
          <span> (*)</span>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="john-snow"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <span> (*)</span>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="john-snow@gmail.com"
          />
        </div>

        <div className="form-group mb-2">
          <label>About</label> (*)
          <br />
          <textarea
            name="body"
            rows={5}
            className="form-control"
            value={null}
            onChange={null}
            placeholder="..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
