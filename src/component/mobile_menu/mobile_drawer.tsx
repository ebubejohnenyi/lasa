import { IoCloseOutline } from "react-icons/io5";
import MenuNav from "../menu_nav/menu_nav";
import cssClasses from "./mobile.drawer.module.css";
import { MouseEventHandler } from "react";

const MobileDrawer: React.FC<{ onMobileMenuView: MouseEventHandler }> = (
  props
) => {
  return (
    <>
      <div className={cssClasses.overlayContainer}></div>
      <div className={cssClasses.mobileMenu}>
        <IoCloseOutline
          onClick={props.onMobileMenuView}
          style={{
            backgroundColor: "transparent",
            width: "40px",
            height: "40px",
          }}
        />
        <ul>
          <MenuNav navPath="/" title="Home" />
          <MenuNav navPath="shop" title="Shop" />
          <MenuNav navPath="gallery" title="Gallery" />
          <MenuNav navPath="contact-us" title="Contact Us" />
        </ul>
      </div>
    </>
  );
};

export default MobileDrawer;
