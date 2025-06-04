import { ReactNode } from "react";
import cssClasses from "./shop_container.module.css";
import { IoIosArrowDown } from "react-icons/io";

import { useFetch } from "../../hooks/useFetch";
import products from "../../data/data";

const ShopContainer: React.FC<{ children: ReactNode }> = (props) => {
  const listOfProduct = useFetch(products);
  return (
    <div>
      <div className={cssClasses.shopContainer}>
        <h1>Showing 1-14 of {listOfProduct.length} results</h1>
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
