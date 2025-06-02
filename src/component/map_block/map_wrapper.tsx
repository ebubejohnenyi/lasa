import { ReactNode } from "react";
import cssClasses from "./map_wrapper.module.css";

const MapWrapper: React.FC<{
  title: string;
  subTitle: string;
  children: ReactNode;
}> = (props) => {
  return (
    <section className={cssClasses.wrapper}>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
      <div>{props.children}</div>
    </section>
  );
};

export default MapWrapper;
