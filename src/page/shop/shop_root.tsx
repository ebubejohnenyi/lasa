import * as React from "react";
import { Outlet } from "react-router-dom";

const ShopRoot: React.FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ShopRoot;
