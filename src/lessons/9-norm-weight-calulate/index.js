import React, { useState } from "react";
import PT from "prop-types";

// При 1 степени ожирения вес превышает идеальный на 29%,
// при второй – на 30–49%,
// при третьей – на 50–99%, при четвертой (морбидное) – на 100% и больше

function calculateIndex(weight, height, gender = "Male") {
  if (gender == "Female") {
    return 100 - ((50 + (height - 150) * 0.75 - 3.5) * 100) / weight;
  }
  return 100 - ((50 + (height - 150) * 0.75) * 100) / weight;
}

function tellIndex(idx) {
  return idx <= 29
    ? "Нет ожирения"
    : idx <= 49
    ? "1-я степень"
    : idx <= 59
    ? "2-я степень"
    : "морбидное";
}
function tellIndexColor(idx) {
  return idx <= 29
    ? "success"
    : idx <= 49
    ? "warning"
    : idx <= 59
    ? "danger"
    : "danger";
}

function RangeInput({ min, max, value, title, onChange }) {
  return (
    <div>
      <label>
        <strong>{title}</strong>
        <br />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          style={{ width: "15rem" }}
        />{" "}
        {value}
      </label>
    </div>
  );
}

export default function Lesson9() {
  let [gender, setGender] = useState("Male");
  let [height, setHeight] = useState(175);
  let [weight, setWeight] = useState(75);

  let resultIndex = calculateIndex(weight, height, gender);
  let indexText = tellIndex(resultIndex);
  let indexColor = tellIndexColor(resultIndex);
  console.log(resultIndex);

  return (
    <div className="wrapper_lesson">
      <h3>Урок 9</h3>
      <h4>Расчёт степени ожирения</h4>
      <RangeInput
        min={150}
        max={200}
        value={height}
        title="Height, cm"
        onChange={setHeight}
      />
      <RangeInput
        min={50}
        max={180}
        value={weight}
        title="Weight, kg"
        onChange={setWeight}
      />
      <div onChange={(e) => setGender(e.target.value)}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault1"
            value="Male"
            checked={gender === "Male"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <span>&#128104;</span>
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            id="flexRadioDefault2"
            value="Female"
            checked={gender === "Female"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            <span>&#128105;</span>
          </label>
        </div>
        My gender is {gender.toLowerCase()}
      </div>
      <hr />
      <div className="mt-2">
        BMI: <strong>{resultIndex.toFixed(1)}</strong>{" "}
        <span className={`badge bg-${indexColor}`}>{indexText}</span>
      </div>
    </div>
  );
}
// Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.
