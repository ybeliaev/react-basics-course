import React, { useState } from "react"
import PT from "prop-types"

// При 1 степени ожирения вес превышает идеальный на 29%, 
// при второй – на 30–49%, 
// при третьей – на 50–99%, при четвертой (морбидное) – на 100% и больше

function calculateIndex(height){
    return 50 + (height - 150) * 0.75
}
function result(weight, height){
    return 100 - (calculateIndex(height) * 100 / weight)
}

function FormInput({chacked, htmlFor}){
    return null
}

export default function Lesson9(){

    return <div className="wrapper_lesson">
    <h3>Урок 7</h3>
    <h4>BMI culculator</h4>
    <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
            Default checked radio
        </label>
    </div>
    <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
            Default checked radio
        </label>
    </div>
    
  </div>
}