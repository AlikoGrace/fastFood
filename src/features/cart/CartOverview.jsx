import React from "react";
import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="bg-stone-800 flex justify-between items-center text-stone-100 px-4 py-4 text-sm uppercase sm:px-6 md:text-base">
      <p className="text-stone-200 font-semibold space-x-4 sm:space-x-6">
        <span>23 orders</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
};

export default CartOverview;
