import { ReactElement } from "react";
import cssClasses from "./shop_list_content.module.css";

const ShopListContent: React.FC<{
  title: string;
  total: number;
  checkBox: ReactElement;
}> = (props) => {
  return (
    <div className={cssClasses.wrapper}>
      <h3>{props.title}</h3>
      <div className={cssClasses.totalCheck}>
        <h3>({props.total})</h3>
        {props.checkBox}
      </div>
    </div>
  );
};

export default ShopListContent;
