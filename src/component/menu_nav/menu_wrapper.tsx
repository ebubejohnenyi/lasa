import cssClasses from "./menu_wrapper.module.css";

import { ReactNode } from "react";

const MenuWrapper: React.FC<{ children: ReactNode }> = (props) => {
  return <ul className={cssClasses.wrapper}>{props.children}</ul>;
};
export default MenuWrapper;
