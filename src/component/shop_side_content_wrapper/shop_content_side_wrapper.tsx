import { ReactNode } from "react";
import cssClasses from "./shop_content_side_wrapper.module.css";

const ShopContentSideWrapper: React.FC<{
  children: ReactNode;
  title: string;
}> = (props) => {
  return (
    <div className={cssClasses.wrapper}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};
export default ShopContentSideWrapper;
