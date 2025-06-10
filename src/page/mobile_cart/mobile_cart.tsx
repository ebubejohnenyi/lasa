import cssClasses from "../../component/cart_drop_down/cart_drop_down.module.css";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../../store/central_state";
import { amountFormatter } from "../../model/product/product";
import CartDropDownItem from "../../component/cart_drop_down/cart_drop_down_item";
import cssMobileClasses from "./mobile_cart.module.css";
import { IoTrashBinOutline } from "react-icons/io5";

const MobileCart: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const products = useTypedSelector((state) => state.product.products);

  return (
    <div className={cssMobileClasses.mobileCartContainer}>
      {products.length > 0 ? (
        <div>
          <div className={cssClasses.scroller}>
            {products.map((product) => (
              <CartDropDownItem
                key={product.id}
                img={product.imagePath}
                name={product.name}
                amount={Number(product.price)}
                quantity={product.quantity}
              />
            ))}
          </div>
          <div className={cssClasses.subTotal}>
            <p>Subtotal:</p>
            <h3>{amountFormatter(10000)}.00</h3>
          </div>
          <h2 className={cssClasses.free}>
            Spend{" "}
            <strong>
              <span> $2000 </span>
            </strong>
            more to reach FREE SHIPPING!
          </h2>
          <div className={cssClasses.closeCheckBtn}>
            <button className={cssClasses.closeBtn}>Close</button>
            <button className={cssClasses.checkOutBtn}>Checkout</button>
          </div>
        </div>
      ) : (
        <div className={cssMobileClasses.emptyCart}>
          <IoTrashBinOutline
            size={50}
            color="#C10000"
            style={{ margin: "1rem 0" }}
          />
          <h2>Cart is Empty</h2>
        </div>
      )}
    </div>
  );
};

export default MobileCart;
