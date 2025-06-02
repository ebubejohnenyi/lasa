import { ReactElement } from "react";
import cssClasses from "./contact_card.module.css";

const ContactCard: React.FC<{
  title: string;
  subTitle: string;
  iconElement: ReactElement;
}> = (props) => {
  return (
    <div className={cssClasses.wrapper}>
      {props.iconElement}
      <h2>Out Store</h2>
      <p>
        7021 Washington SQ. <br /> South New York, NY 10012
      </p>
    </div>
  );
};
export default ContactCard;
