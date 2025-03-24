import React from "react";
import Button from "../../ui/Button";

const MenuItem = ({ foodItem }) => {
  console.log("Food item:", foodItem); // Log to see if data is passed correctly

  const { id, name, imageUrl } = foodItem;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24`} />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <div className="mt-auto flex items-center justify-between">
          <p>Price</p>
          <Button type="small">Add to cart</Button>
        </div>{" "}
      </div>
    </li>
  );
};

export default MenuItem;
