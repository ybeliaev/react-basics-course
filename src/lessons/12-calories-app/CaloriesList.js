import React from "react";
import CaloriesTodoItem from "./CaloriesTodoItem";

export default function CaloriesList({ notes, removeItem }) {
  return (
    <>
      {notes.map((item) => {
        return (
          <CaloriesTodoItem
            titleEating={item.titleEating}
            calories={item.calories}
            date={item.date}
            removeItem={removeItem}
          />
        );
      })}
    </>
  );
}
