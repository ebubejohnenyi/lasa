import cssClasses from "./right_menu_nav.module.css";
import { FaRegUser } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import CounterWrapper from "./counter_wrapper";

const RightMenuNav = () => {
  return (
    <section className={cssClasses.container}>
      <FaRegUser className={cssClasses.emptyIcon} />
      <RxCountdownTimer className={cssClasses.emptyIcon} />
      <span className={cssClasses.divider}></span>
      <CounterWrapper count={"0"}>
        <FaRegHeart className={cssClasses.icon} />
      </CounterWrapper>
      <CounterWrapper count={"0"}>
        <FiShoppingCart className={cssClasses.icon} />
      </CounterWrapper>
    </section>
  );
};

export default RightMenuNav;
