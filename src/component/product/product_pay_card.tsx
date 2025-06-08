import {
  FaApplePay,
  FaCcPaypal,
  FaGooglePay,
  FaCcAmazonPay,
  FaAlipay,
} from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import cssClasses from "../../page/product/product_detail.module.css";

const ProductPayCard: React.FC = () => {
  return (
    <div className={cssClasses.checkOutWrapper}>
      <h3>Guaranteed Safe Checkout</h3>
      <div className={cssClasses.payCards}>
        <FaApplePay className={cssClasses.payCardsIcon} />
        <FaCcPaypal className={cssClasses.payCardsIcon} />
        <FaGooglePay className={cssClasses.payCardsIcon} />
        <FaCcAmazonPay className={cssClasses.payCardsIcon} />
        <FaAlipay className={cssClasses.payCardsIcon} />
        <RiVisaLine className={cssClasses.payCardsIcon} />
        <SiMastercard className={cssClasses.payCardsIcon} />
      </div>
      <div className={cssClasses.worldWideWrapper}>
        <div>
          <h2>Free</h2>
          <p>Worldwide Shopping</p>
        </div>
        <div>
          <h2>100%</h2>
          <p>Guaranteed Satisfaction</p>
        </div>
        <div>
          <h2>30 Days</h2>
          <p>Guaranteed Money Back</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPayCard;
