import React, { useState } from "react";

// Converting RGB to hex
function RGBToHex(r, g, b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}
// **************************

function Slider({ min, max, value, title, onChange }) {
  return (
    <div className="col-sm-4">
      <span>{title}</span>
      <label className="form-label d-flex align-items-center">
        <input
          className="form-range me-2"
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
        />
        <span>{value}</span>
      </label>
    </div>
  );
}
function ColorWrapper({ valueR, valueG, valueB }) {
  return (
    <div
      className="border mt-3"
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: `rgb(${valueR}, ${valueG}, ${valueB})`,
      }}
    ></div>
  );
}
function Badge({ valueR, valueG, valueB }) {
  return (
    <div>
      DEC:{" "}
      <span className="badge bg-dark text-monospace">
        {`rgba(${valueR},${valueG},${valueB},1)`}
      </span>
      <br />
      HEX:{" "}
      <span className="badge bg-dark text-monospace">
        {RGBToHex(valueR, valueG, valueB)}
      </span>
    </div>
  );
}

export default function Lesson10() {
  let [valueR, setValueR] = useState(120);
  let [valueG, setValueG] = useState(160);
  let [valueB, setValueB] = useState(100);
  return (
    <div className="wrapper_lesson">
      <h3>Урок 10</h3>
      <h4>Проект Color chooser</h4>
      <Slider
        min={0}
        max={255}
        title={"R"}
        value={valueR}
        onChange={setValueR}
      />
      <Slider
        min={0}
        max={255}
        title={"G"}
        value={valueG}
        onChange={setValueG}
      />
      <Slider
        min={0}
        max={255}
        title={"B"}
        value={valueB}
        onChange={setValueB}
      />
      <ColorWrapper valueR={valueR} valueG={valueG} valueB={valueB} />
      <Badge valueR={valueR} valueG={valueG} valueB={valueB} />
    </div>
  );
}
