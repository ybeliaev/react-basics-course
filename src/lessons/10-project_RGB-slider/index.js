import React from "react";

function Slider({ min, max, value, title, onChange }) {
  return (
    <div className="col-sm-5">
      <label className="form-label d-flex align-items-center">
        <span>{title}</span>
        <input
          className="form-range mx-2"
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
        />
        <span>{1000}</span>
      </label>
    </div>
  );
}

export default function Lesson10() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 10</h3>
      <h4>Проект RGB-sliders</h4>
      <Slider min={0} max={255} title={"R"} />
    </div>
  );
}
