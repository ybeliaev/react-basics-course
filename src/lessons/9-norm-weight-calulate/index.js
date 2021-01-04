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

function FormInput({checked, htmlFor}){
    return null
}

export default function Lesson9(){
    let [gender, setGender] = useState("Male")    
    

    return <div className="wrapper_lesson">
        <h3>Урок 7</h3>
        <h4>BMI culculator</h4>
        <div onChange={e => setGender(e.target.value)}>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value="Male" checked={gender === "Male"}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                <span>&#128104;</span>
                </label>               
                
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value="Female" checked={gender === "Female"}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                <span>&#128105;</span>
                </label>
            </div>
            {gender}
        </div>    
  </div>
}
// Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.