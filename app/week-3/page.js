import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="text-center flex flex-col items-center">
      <h1 className="text-5xl my-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
