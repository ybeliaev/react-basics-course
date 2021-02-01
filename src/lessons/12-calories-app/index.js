import React, { useState } from "react";
import CaloriesList from "./CaloriesList.js";
import CaloriesTodoForm from "./CaloriesTodoForm.js";
import CaloriesTodoSearch from "./CaloriesTodoSearch";

let initialNotes = [
  {
    titleEating: "Breakfast",
    calories: 900,
    date: new Date(2020, 1, 1, 10, 0, 0),
  },
  { titleEating: "Lunch", calories: 550, date: new Date(2020, 1, 1, 14, 0, 0) },
  {
    titleEating: "Dinner",
    calories: 800,
    date: new Date(2020, 1, 1, 18, 0, 0),
  },
  {
    titleEating: "Breakfast",
    calories: 1000,
    date: new Date(2020, 1, 2, 10, 0, 0),
  },
  { titleEating: "Lunch", calories: 500, date: new Date(2020, 1, 2, 14, 0, 0) },
  {
    titleEating: "Dinner",
    calories: 750,
    date: new Date(2020, 1, 2, 18, 0, 0),
  },
];

export default function Lesson12() {
  let [notes, setNotes] = useState(initialNotes);
  let [searchWord, setSearchWord] = useState("");

  function createItem(titleEating, calories, date) {
    let newItem = { titleEating, calories, date };
    setNotes([...notes, newItem]);
  }
  function removeItem(date) {
    setNotes(notes.filter((el) => el.date != date));
  }
  console.log({ searchWord });

  return (
    <div className="wrapper_lesson">
      <h3>Урок 12</h3>
      <h4>ПРОЕКТ CALORIES-APP</h4>
      <h4>Food Diary</h4>
      <CaloriesTodoForm createItem={createItem} />
      <CaloriesTodoSearch
        setSearchWord={setSearchWord}
        searchWord={searchWord}
      />
      <CaloriesList
        notes={notes}
        removeItem={removeItem}
        searchWord={searchWord}
      />
    </div>
  );
}
