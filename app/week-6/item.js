import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <div className="border p-2 m-2 w-fit">
      <div>{name}</div>
      <div>
        Buy {quantity} in {category}
      </div>
    </div>
  );
};

export default Item;
