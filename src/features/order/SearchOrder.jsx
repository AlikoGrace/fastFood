import React from "react";

const SearchOrder = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="search order here"
        className="w-40 rounded-full
    py-2 px-2 text-sm transition-all duration-300 hover:outline-none focus:outline-none placeholder:text-stone-400 focus:ring-opacity-5- sm:2-64  bg-yellow-100"
      />
    </form>
  );
};

export default SearchOrder;
