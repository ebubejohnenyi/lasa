import { FaPlus, FaMinus, FaHeart } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { PiTShirtLight } from "react-icons/pi";
import { VscPackage } from "react-icons/vsc";
import cssClasses from "../../page/product/product_detail.module.css";

const ProductSecondPoint: React.FC<{ size: string }> = (props) => {
  return (
    <>
      <div className={cssClasses.secondPoint}>
        <div>
          <div className={cssClasses.increase_decrease}>
            <FaPlus style={{ cursor: "pointer" }} />
            <span>5</span>
            <FaMinus style={{ cursor: "pointer" }} />
          </div>
          <button className={cssClasses.addToCart}>Add to Cart</button>
          <button className={cssClasses.buyNow}>Buy Now</button>
        </div>
        <div className={cssClasses.addToWishlist}>
          <FaHeart className={cssClasses.iconHeart} />
          <button>Add to wishlist</button>
        </div>
        <div className={cssClasses.sizeDeliveryQuestion}>
          <p>
            <PiTShirtLight className={cssClasses.icon} /> {props.size}
          </p>
          <p>
            <VscPackage className={cssClasses.icon} /> Delivery Return
          </p>
          <p>
            <HiOutlineQuestionMarkCircle className={cssClasses.icon} /> Ask a
            Question
          </p>
        </div>
      </div>
      <div className={cssClasses.mobileViewAddButtons}>
        <button className={cssClasses.addToCart}>Add to Cart</button>
        <button className={cssClasses.buyNow}>Buy Now</button>
        <FaHeart className={cssClasses.iconHeart} />
      </div>
    </>
  );
};
export default ProductSecondPoint;
