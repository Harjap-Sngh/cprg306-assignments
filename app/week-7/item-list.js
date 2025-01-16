"use client";

import React from "react";
import { useState } from "react";
import Item from "./item";
import CategoryGroup from "./category-group";

const ItemList = ({ itemsdata }) => {
  const [sortBy, setsortBy] = useState("name");

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

  if (sortBy === "groupCategory") {
    content = <CategoryGroup itemsdata={itemsdata} />;
  } else {
    sortWay();
    content = itemsdata.map((item) => (
      <Item
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        category={item.category}
      />
    ));
  }

  return (
    <div className="">
      <div className="flex m-5 items-center">
        <div>Sort By:</div>
        <button
          onClick={() => setsortBy("name")}
          className="border p-1 border-white rounded hover:bg-white hover:text-black mx-2"
        >
          Name
        </button>
        <button
          onClick={() => setsortBy("quantity")}
          className="border p-1 border-white rounded hover:bg-white hover:text-black mx-2"
        >
          Quantity
        </button>
        <button
          onClick={() => setsortBy("groupCategory")}
          className="border p-1 border-white rounded hover:bg-white hover:text-black mx-2"
        >
          Category
        </button>
      </div>
      {content}
    </div>
  );
};

export default ItemList;
