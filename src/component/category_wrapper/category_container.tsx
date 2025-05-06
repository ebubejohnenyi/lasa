import CategoryWrapper from "./category_wrapper";
import CardCategory from "../card_category/card_category";
import cssClasses from "./category_container.module.css";

import chair1 from "../../assets/png/1.png";
import chair9 from "../../assets/png/9.png";
import chair3 from "../../assets/png/3.png";
import chair4 from "../../assets/png/4.png";
import chair5 from "../../assets/png/5.png";
import chair7 from "../../assets/png/7.png";
import chair8 from "../../assets/png/8.png";
import chair11 from "../../assets/png/11.png";
import hook from "../../assets/png/10.png";
import wallpaper from "../../assets/jpg/wallpaper1.jpg";

const CategoryContainer: React.FC = () => {
  return (
    <CategoryWrapper title="Feature Categories">
      <div className={cssClasses.container}>
        <CardCategory imgPath={chair3} title="Dining Chairs" />
        <CardCategory imgPath={chair1} title="Lounge Chairs" />
        <CardCategory imgPath={chair5} title="Sofas" />
        <CardCategory imgPath={chair4} title="Bar Stools" />
        <CardCategory imgPath={chair9} title="Coffee tables" />
        <CardCategory imgPath={chair8} title="Pendants lights" />
        <CardCategory imgPath={chair7} title="Floor lamps" />
        <CardCategory imgPath={hook} title="Hooks & coat stands" />
        <CardCategory imgPath={wallpaper} title="Wallpapers" />
        <CardCategory imgPath={chair11} title="Kitchen & dinning" />
      </div>
    </CategoryWrapper>
  );
};

export default CategoryContainer;
