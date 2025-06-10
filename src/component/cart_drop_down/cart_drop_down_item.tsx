import { FaPlus, FaMinus } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import cssClasses from "./cart_drop_down.module.css";
import { amountFormatter } from "../../model/product/product";

const CartDropDownItem: React.FC<{
  name: string;
  amount: number;
  quantity: number;
  img: string;
}> = (props) => {
  return (
    <div className={cssClasses.wrapper}>
      <div className={cssClasses.imgContainer}>
        <img src={props.img} alt="Image" />
      </div>
      <div className={cssClasses.binContainer}>
        <div>
          <p>{props.name}</p>
          <div className={cssClasses.increase_decrease_wrapper}>
            <div className={cssClasses.increase_decrease}>
              <FaPlus style={{ cursor: "pointer" }} size={15} />
              <span>{props.quantity}</span>
              <FaMinus style={{ cursor: "pointer" }} size={15} />
            </div>
            <span className={cssClasses.price}>
              {amountFormatter(props.amount)}
            </span>
          </div>
        </div>
        <ImBin size={25} className={cssClasses.trash} />
      </div>
    </div>
  );
};

export default CartDropDownItem;
