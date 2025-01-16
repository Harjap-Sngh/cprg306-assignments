import React from "react";
import ItemList from "./item-list";
import CategoryGroup from "./category-group";

const Page = () => {
  return (
    <main className="m-5">
      <h1 className="text-5xl">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
