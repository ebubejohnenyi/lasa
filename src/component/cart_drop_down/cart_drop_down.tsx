import { forwardRef, useImperativeHandle, useRef } from "react";
import cssClasses from "./cart_drop_down.module.css";
import * as ReactDOM from "react-dom";

import CartDropDownItem from "./cart_drop_down_item";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../../store/central_state";
import { amountFormatter } from "../../model/product/product";

const CartDropDown = forwardRef<HTMLDialogElement>((_, ref) => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const products = useTypedSelector((state) => state.product.products);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => dialogRef.current!);

  const content = (
    <dialog className={cssClasses.modalContainer} ref={dialogRef}>
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
          <button
            className={cssClasses.closeBtn}
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
          <button className={cssClasses.checkOutBtn}>Checkout</button>
        </div>
      </div>
    </dialog>
  );

  return ReactDOM.createPortal(content, document.getElementById("cart-modal")!);
});
export default CartDropDown;
