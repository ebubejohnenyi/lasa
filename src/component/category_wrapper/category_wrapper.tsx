import { ReactNode } from "react";
import cssClasses from "./category_wrapper.module.css";

const CategoryWrapper: React.FC<{
  title?: string;
  navTitle1?: string;
  navTitle2?: string;
  children: ReactNode;
}> = (props) => {
  return (
    <div className={cssClasses.container}>
      {props.title && <h1>{props.title}</h1>}
      {props.navTitle1 && (
        <div className={cssClasses.subNavigation}>
          <ul>
            <li>{props.navTitle1}</li>
            <li>{props.navTitle2}</li>
          </ul>
        </div>
      )}
      {props.children}
    </div>
  );
};

export default CategoryWrapper;
