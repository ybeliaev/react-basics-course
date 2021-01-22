import React from "react";

export default function TodoForm() {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control d-inline w-25 me-2"
        id="exampleInputEmail1"
      />
      <button className="btn btn-primary">ADD</button>
    </div>
  );
}
