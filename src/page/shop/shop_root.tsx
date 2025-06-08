import * as React from "react";
import { Outlet } from "react-router-dom";

const ShopRoot: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ShopRoot;
