import { ReactNode } from "react";
import cssClasses from "./right_menu_nav.module.css";

const CounterWrapper: React.FC<{ children: ReactNode; count: string }> = (
  props
) => {
  return (
    <div className={cssClasses.counterWrapper}>
      <span>{props.count}</span>
      {props.children}
    </div>
  );
};

export default CounterWrapper;
