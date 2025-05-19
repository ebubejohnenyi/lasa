import { NavLink } from "react-router-dom";
import cssClasses from "./menu_nav.module.css";
const MenuNav: React.FC<{ title: string; navPath: string }> = (props) => {
  return (
    <li className={cssClasses.listWrapper}>
      <NavLink
        to={props.navPath}
        className={({ isActive }) => (isActive ? cssClasses.active : undefined)}
        end={props.navPath === "/"}
      >
        {props.title}
      </NavLink>
    </li>
  );
};
export default MenuNav;
