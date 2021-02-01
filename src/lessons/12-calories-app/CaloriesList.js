import React from "react";
import CaloriesTodoItem from "./CaloriesTodoItem";

export default function CaloriesList({ notes, removeItem, searchWord }) {
  return (
    <>
      {notes
        .filter((elem) => {
          return elem.titleEating
            .toLowerCase()
            .includes(searchWord.toLowerCase());
        })
        .map((item) => {
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
