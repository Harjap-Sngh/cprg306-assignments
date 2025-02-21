"use client";
import React from "react";
import { useState } from "react";

const NewItem = () => {
  let [quantity, setQuantity] = useState(1);
  let [category, setCategory] = useState("produce");
  let [itemName, setItemName] = useState("");

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addItem = () => {
    if (itemName === "") {
    } else {
      alert(
        `Added item: ${itemName}, quantity:${quantity} , category: ${category}`
      );
      quantity = 1;
      category = "produce";
      itemName = "";
    }
  };

  return (
    <form className="flex items-center space-x-4 text-black">
      <input
        placeholder="Item name"
        className="border p-2 rounded-md"
        required
        onChange={(e) => setItemName(e.target.value)}
      />

      <div className="flex items-center bg-white rounded-md text-black h-10">
        <input
          type="number"
          value={quantity}
          readOnly
          className="text-center"
        />
        <button
          type="button"
          onClick={increaseQuantity}
          className="p-1 w-8 bg-blue-600 hover:bg-blue-700 rounded-md mr-1"
        >
          +
        </button>
        <button
          onClick={decreaseQuantity}
          type="button"
          className={`p-1 w-8 rounded-md mr-1 ${
            quantity <= 1
              ? "bg-blue-400 hover:bg-blue-400 cursor-not-allowed"
              : " bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={quantity <= 1 ? true : false}
        >
          -
        </button>
      </div>
      <select
        className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans text-black"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled>
          Category
        </option>
        <option value="produce" defaultValue>
          Produce
        </option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md"
        type="button"
        onClick={addItem}
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
