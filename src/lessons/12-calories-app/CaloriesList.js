import React from "react";
import CaloriesTodoItem from "./CaloriesTodoItem";

export default function CaloriesList({ notes }) {
  return (
    <>
      {notes.map((item) => {
        let d = item.date.toLocaleString("ru").split(",").join("");
        return (
          <CaloriesTodoItem
            titleEating={item.titleEating}
            calories={item.calories}
            date={d}
          />
        );
      })}
    </>
  );
}
