import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";

const AppLayout = () => {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] ">
      <Header />
      <div>
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
