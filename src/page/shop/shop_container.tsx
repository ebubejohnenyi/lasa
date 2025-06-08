import { ReactNode } from "react";
import cssClasses from "./shop_container.module.css";
import { IoIosArrowDown } from "react-icons/io";

import { useFetch } from "../../hooks/useFetch";
import LoadingIcon from "../../component/loading_icon/loading_icon.tsx";

const ShopContainer: React.FC<{ children: ReactNode }> = (props) => {
  const { data: products, isLoading } = useFetch();
  return (
    <div>
      <div className={cssClasses.shopContainer}>
        {isLoading && <LoadingIcon />}
        {products && <h1>Showing 1-14 of {products?.length} results</h1>}
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
