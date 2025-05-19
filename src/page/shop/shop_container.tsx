import { ReactNode } from "react";
import cssClasses from "./shop_container.module.css";
import { IoIosArrowDown } from "react-icons/io";

const ShopContainer: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <div>
      <div className={cssClasses.shopContainer}>
        <h1>Showing 1-12 of 20 results</h1>
        <div className={cssClasses.sortWrapper}>
          <h1>Sort by:</h1>
          <div className={cssClasses.sortContainer}>
            {" "}
            <h1>Default sorting</h1>
            <IoIosArrowDown
              size={23}
              style={{ backgroundColor: "transparent", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default ShopContainer;
