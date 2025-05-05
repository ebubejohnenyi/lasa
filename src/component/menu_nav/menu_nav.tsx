import cssClasses from "./menu_nav.module.css";
const MenuNav: React.FC<{ title: string }> = (props) => {
  return <li className={cssClasses.li}>{props.title}</li>;
};
export default MenuNav;
