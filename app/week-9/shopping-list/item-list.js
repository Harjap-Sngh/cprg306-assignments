"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Item from "./item";
import Recipe from "./recipe";

const ItemList = ({ itemsdata }) => {
  const [sortBy, setsortBy] = useState("name");
  const [ingredient, setIngredient] = useState(null);

  /* const stringConverter = (value) => {
    if (value === null) return;
    let index = value.indexOf(",");
    if (value.substring(0, index) === "") {
      value = value.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
      setIngredient(value);
    } else {
      setIngredient(value.substring(0, index));
    }
  }; */

  function sortWay() {
    if (sortBy === "name") {
      itemsdata.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sortBy === "quantity") {
      itemsdata.sort((a, b) => {
        return a.quantity - b.quantity;
      });
    }
  }

  let recipes =
    ingredient === null ? (
      <div>Select a meal to see meal ideas </div>
    ) : (
      <Recipe ingredients={ingredient} />
    );

  useEffect(() => {
    recipes = <Recipe ingredients={ingredient} />;
    /* stringConverter(ingredient); */
  }, [ingredient]);

  let content;

  sortWay();
  content = itemsdata.map((item) => (
    <Item
      key={item.id}
      name={item.name}
      quantity={item.quantity}
      category={item.category}
      onClick={() => {
        setIngredient(item.name);
      }}
    />
  ));

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setsortBy("name")}
          className="border border-white p-1 rounded hover:bg-white hover:text-black"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setsortBy("quantity")}
          className="border border-white p-1 rounded hover:bg-white hover:text-black"
        >
          Sort by Quantity
        </button>
      </div>
      <div className="flex space-x-10">
        <div className="flex-col space-y-4">{content}</div>
        <div className="w-96">
          <div className="text-3xl pb-5">Meal ideas</div>
          {recipes}
        </div>
      </div>
    </div>
  );
};

export default ItemList;

/* "use client";

import React, { useState } from "react";
import Item from "./item";
import Recipe from "./recipe";

const ItemList = ({ itemsdata }) => {
  const [sortBy, setsortBy] = useState("name");
  const [ingredient, setIngredient] = useState(null);

  // Function to clean the ingredient string (removes comma and emojis)
  const stringConverter = (value) => {
    if (value === null) return "";
    let index = value.indexOf(",");
    if (index === -1) return value; // If no comma, return as is

    // Remove emojis and clean up
    if (value.substring(0, index) === "") {
      value = value.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
      return value;
    } else {
      return value.substring(0, index); // Get part before the comma
    }
  };

  // Function to sort the items
  function sortWay() {
    if (sortBy === "name") {
      itemsdata.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    } else if (sortBy === "quantity") {
      itemsdata.sort((a, b) => {
        return a.quantity - b.quantity;
      });
    }
  }

  let content;

  sortWay();
  content = itemsdata.map((item) => (
    <Item
      key={item.id}
      name={item.name}
      quantity={item.quantity}
      category={item.category}
      onClick={() => {
        const cleanedIngredient = stringConverter(item.name); // Clean the ingredient
        setIngredient(cleanedIngredient); // Set the cleaned ingredient
      }}
    />
  ));

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={() => setsortBy("name")}
          className="border border-white p-1 rounded hover:bg-white hover:text-black"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setsortBy("quantity")}
          className="border border-white p-1 rounded hover:bg-white hover:text-black"
        >
          Sort by Quantity
        </button>
      </div>
      <div className="flex space-x-10">
        <div className="flex-col space-y-4">{content}</div>
        <div className="w-96">
          <div className="text-3xl pb-5">Meal ideas</div>
          <Recipe ingredients={ingredient} />
        </div>
      </div>
    </div>
  );
};

export default ItemList; */
