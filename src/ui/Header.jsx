import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="flex justify-between items-center border-b  border-stone-200 bg-yellow-400 sm:px-6 py-3 px-4">
      <Link to="/" className="tracking-widest font-bold ">
        fastFood
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
