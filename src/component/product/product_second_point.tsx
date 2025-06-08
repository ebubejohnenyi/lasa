import { FaPlus, FaMinus, FaHeart } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { PiTShirtLight } from "react-icons/pi";
import { VscPackage } from "react-icons/vsc";
import cssClasses from "../../page/product/product_detail.module.css";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { productAction } from "../../store/product_slice";
import { Product } from "../../model/product/product";
import type { RootState } from "../../store/central_state";
import { useEffect, useState } from "react";

const ProductSecondPoint: React.FC<{ size: string; product: Product }> = (
  props
) => {
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const products = useTypedSelector((state) => state.product.products);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === props.product.id);
    setProductCount(foundProduct?.quantity ?? 0);
  }, [products, props.product.id]);

  const handleAddToCart = (product: Product) => {
    dispatch(productAction.addToCart(product));
  };

  return (
    <>
      <div className={cssClasses.secondPoint}>
        <div>
          <div className={cssClasses.increase_decrease}>
            <FaPlus style={{ cursor: "pointer" }} />
            <span>{productCount}</span>
            <FaMinus style={{ cursor: "pointer" }} />
          </div>
          <button
            className={cssClasses.addToCart}
            onClick={() => handleAddToCart(props.product)}
          >
            Add to Cart
          </button>
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
        <button
          className={cssClasses.addToCart}
          onClick={() => handleAddToCart(props.product)}
        >
          Add to Cart
        </button>
        <button
          className={cssClasses.buyNow}
          onClick={() => handleAddToCart(props.product)}
        >
          Buy Now
        </button>
        <FaHeart className={cssClasses.iconHeart} />
      </div>
    </>
  );
};
export default ProductSecondPoint;
