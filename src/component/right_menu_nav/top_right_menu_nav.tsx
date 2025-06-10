import cssClasses from "./top_right_menu_nav.module.css";
import { FaRegUser } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import CounterWrapper from "./counter_wrapper";
import { useRef } from "react";
import CartDropDown from "../cart_drop_down/cart_drop_down";

const TopRightMenuNav: React.FC<{
  totalProduct: number;
}> = (props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <section className={cssClasses.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaRegUser className={cssClasses.emptyIcon} />
        <RxCountdownTimer className={cssClasses.emptyIcon} />
      </div>
      <span className={cssClasses.divider}></span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CounterWrapper
          counterWrapperClass={cssClasses.counterWrapper}
          count={0}
        >
          <FaRegHeart className={cssClasses.icon} />
        </CounterWrapper>
        <CounterWrapper
          counterWrapperClass={cssClasses.counterWrapper}
          count={props.totalProduct}
        >
          <FiShoppingCart className={cssClasses.icon} onClick={openModal} />
        </CounterWrapper>
        <CartDropDown ref={modalRef} />
      </div>
    </section>
  );
};

export default TopRightMenuNav;
