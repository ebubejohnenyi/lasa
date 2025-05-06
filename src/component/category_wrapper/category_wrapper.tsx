import { ReactNode } from "react";
import cssClasses from "./category_wrapper.module.css";

const CategoryWrapper: React.FC<{ title: string; children: ReactNode }> = (
  props
) => {
  return (
    <div className={cssClasses.container}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default CategoryWrapper;
