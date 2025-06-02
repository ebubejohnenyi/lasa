import { NavLink } from "react-router-dom";
import cssClasses from "./header_nav_container.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeaderNavigationContainer: React.FC<{
  title: string;
  currentPageTitle: string;
  customClassName?: string;
}> = (props) => {
  return (
    <section className={props.customClassName ?? cssClasses.container}>
      <div className={cssClasses.headerContent}>
        <h1>
          <NavLink to="/">{props.title}</NavLink>
        </h1>
        <MdOutlineKeyboardArrowRight
          size={25}
          color="rgba(146, 146, 146, 0.99)"
          style={{ backgroundColor: "transparent" }}
        />
        <h1>{props.currentPageTitle}</h1>
      </div>
    </section>
  );
};

export default HeaderNavigationContainer;
