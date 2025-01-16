import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <>
      <div className="border-2 border-white text-left p-2 hover:bg-white hover:text-black w-40 rounded m-">
        <div>{name}</div>
        <div>
          Buy {quantity} in {category}
        </div>
      </div>
    </>
  );
};

export default Item;
