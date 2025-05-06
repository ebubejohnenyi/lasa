import { FaHeart, FaStar } from "react-icons/fa";
import cssClass from "./product_container.module.css";
import { IoEye } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";

const ProductContainer: React.FC<{
  img: string;
  productName: string;
  price: string;
}> = (props) => {
  return (
    <div className={cssClass.productWrapper}>
      <section className={cssClass.container}>
        <img src={props.img} alt={props.img} />
        <h3>{props.productName}</h3>
        <section
          style={{ display: "flex", alignItems: "center", margin: "15px 0px" }}
        >
          <FaStar color="brown" />
          <FaStar color="brown" />
          <FaStar color="brown" />
          <FaStar color="brown" />
        </section>
        <h1>{props.price}</h1>
      </section>
      <section className={cssClass.hoverViewContainer}>
        <div className={cssClass.overlayView}></div>
        <img src={props.img} alt={props.img} />
        <section className={cssClass.subSelectOption}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "25px",
              backgroundColor: "transparent",
            }}
          >
            <div className={cssClass.productIconContainer}>
              <IoEye className={cssClass.productIcons} />
            </div>
            <div className={cssClass.productIconContainer}>
              <GoArrowSwitch className={cssClass.productIcons} />
            </div>
            <div className={cssClass.productIconContainer}>
              <FaHeart className={cssClass.productIcons} />
            </div>
          </div>
          <button>Select Option</button>
        </section>
      </section>
    </div>
  );
};

export default ProductContainer;
