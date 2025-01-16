"use client";

import React, { useEffect, useState } from "react";

const Recipe = ({ ingredients }) => {
  const [mealData, setMealData] = useState([]);
  const [thingsNeeded, setThingsNeeded] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const stringConverter = (value) => {
    if (value === null) return;
    let index = value.indexOf(",");
    if (value.substring(0, index) === "") {
      value = value.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
      return value;
    } else {
      return value.substring(0, index);
    }
  };

  const fetchInfo = async () => {
    if (ingredients === null) return;
    try {
      ingredients = stringConverter(ingredients);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
      );
      const data = await response.json();
      setMealData(data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchThings = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      const ingredientsList = [];

      for (let i = 1; i <= 20; i++) {
        const ingredient = data.meals[0][`strIngredient${i}`];
        const quantity = data.meals[0][`strMeasure${i}`];
        if (ingredient) {
          ingredientsList.push(`${ingredient} (${quantity})`);
        }
      }
      setThingsNeeded(ingredientsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [ingredients]);

  return (
    <div>
      {mealData.length > 0 ? (
        mealData.map((meal) => (
          <div key={meal.idMeal}>
            <div
              onClick={() => {
                setSelectedMeal(meal.idMeal);
                fetchThings(meal.idMeal);
              }}
              className="cursor-pointer hover:bg-gray-200 bg-slate-800 m-1 p-2 rounded-md text-white hover:text-black"
            >
              {meal.strMeal}
            </div>

            {selectedMeal === meal.idMeal && thingsNeeded.length > 0 && (
              <ul className="my-3">
                {thingsNeeded.map((thing, index) => (
                  <li className="ml-8" key={index}>
                    {thing}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <div>No meals found for the given {ingredients}</div>
      )}
    </div>
  );
};

export default Recipe;
