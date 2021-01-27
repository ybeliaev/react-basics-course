import React from "react";
import CaloriesTodoForm from "../12-calories-app/CaloriesTodoForm";
import CaloriesTodoItems from "./CaloriesTodoItems";
import CaloriesTodoSearch from "./CaloriesTodoSearch";

export default function Lesson12() {
  return (
    <div className="wrapper_lesson">
      <h3>Урок 12</h3>
      <h4>ПРОЕКТ CALORIES-APP</h4>
      <h4>Food Diary</h4>
      <CaloriesTodoForm />
      <CaloriesTodoSearch />
      <CaloriesTodoItems />
    </div>
  );
}
