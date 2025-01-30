import React from "react";
import Item from "./item";
import itemsdata from "./items.json";

const CategoryGroup = () => {
  let s = new Set();
  itemsdata.forEach((item) => {
    s.add(item.category);
  });

  let categories = [...s];
  categories.sort();

  return (
    <div>
      {categories.map((category) => {
        const itemsInCategory = itemsdata.filter(
          (item) => item.category === category
        );
        itemsInCategory.sort((a, b) => a.name.localeCompare(b.name));
        return (
          <div key={category}>
            <h1 className="capitalize">{category}</h1>
            <div>
              {itemsInCategory.map((item) => {
                return (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryGroup;
