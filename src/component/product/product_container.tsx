import { FaHeart, FaStar } from "react-icons/fa";
import cssClass from "./product_container.module.css";
import { IoEye } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const ProductContainer: React.FC<{
  img: string;
  productName: string;
  price: string;
  featuredProduct?: boolean;
  newProduct?: boolean;
  sale?: number;
  addToCart?: MouseEventHandler;
  linkTo?: string;
  onNavigate?: string;
}> = (props) => {
  let content;

  if (props.newProduct) {
    content = "NEW";
  } else if (props.sale) {
    content = `${props.sale}%`;
  }
  return (
    <div className={cssClass.productWrapper}>
      <div className={cssClass.overWrapper}>
        <section className={cssClass.container}>
          <div className={cssClass.topLeftContainer}>
            {content && (
              <h2
                style={{
                  backgroundColor: "#CC0000",
                  letterSpacing: "2px",
                  color: "white",
                  fontSize: "13px",
                  padding: "3px 5px",
                  borderRadius: "3px",
                  marginBottom: "5px",
                  width: "fit-content",
                }}
              >
                {content}
              </h2>
            )}
            {props.featuredProduct ? (
              <h2
                style={{
                  backgroundColor: "#92BB00",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "white",
                  fontSize: "13px",
                  padding: "3px 5px",
                  borderRadius: "3px",
                }}
              >
                Featured
              </h2>
            ) : undefined}
          </div>
          <img src={props.img} alt={props.img} />
          <button className={cssClass.addToCardBtn} onClick={props.addToCart}>
            Add To Cart
          </button>
          <h3>
            <Link to={props.linkTo ?? `/shop/${props.onNavigate!}`}>
              {props.productName}
            </Link>
          </h3>
          <section className={cssClass.stars}>
            <FaStar color="brown" />
            <FaStar color="brown" />
            <FaStar color="brown" />
            <FaStar color="brown" />
          </section>
          <h1>{props.price}</h1>
        </section>
        <section className={cssClass.hoverViewContainer}>
          <div className={cssClass.overlayView}></div>
          <div className={cssClass.topLeftContainer}>
            {content && (
              <h2
                style={{
                  backgroundColor: "#CC0000",
                  width: "fit-content",
                  letterSpacing: "2px",
                  color: "white",
                  fontSize: "13px",
                  padding: "3px 5px",
                  borderRadius: "3px",
                  marginBottom: "5px",
                }}
              >
                {content}
              </h2>
            )}
            {props.featuredProduct ? (
              <h2
                style={{
                  backgroundColor: "#92BB00",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "white",
                  fontSize: "13px",
                  padding: "3px 5px",
                  borderRadius: "3px",
                }}
              >
                Featured
              </h2>
            ) : undefined}
          </div>
          <img src={props.img} alt={props.img} />
          <section className={cssClass.subSelectOption}>
            <div className={cssClass.productIconWrapper}>
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
            <button onClick={props.addToCart}>Add to Cart</button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ProductContainer;
