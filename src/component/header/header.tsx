import cssClasses from "./header.module.css";
import TextInputWrapper from "../input/text_input_wrapper";
import { CiSearch } from "react-icons/ci";
import RightMenuNav from "../right_menu_nav/right_menu_nav";
import logo from "../../assets/png/logo.png";
import MenuWrapper from "../menu_nav/menu_wrapper";
import MenuNav from "../menu_nav/menu_nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoBasketOutline, IoCloseOutline } from "react-icons/io5";
import CounterWrapper from "../right_menu_nav/counter_wrapper";
import { useState } from "react";

const Header: React.FC = () => {
  const [viewMobileMenu, setViewMobileMenu] = useState(false);

  function handleMobileMenuView() {
    setViewMobileMenu(() => !viewMobileMenu);
  }

  // useEffect(() => {
  //   if (viewMobileMenu) {
  //     // Disable scrolling when menu is open
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     // Re-enable scrolling when menu is closed
  //     document.body.style.overflow = "";
  //   }

  //   // Clean up on component unmount
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [viewMobileMenu]);
  return (
    <>
      <section className={cssClasses.container}>
        <RxHamburgerMenu
          className={cssClasses.navMenu}
          onClick={handleMobileMenuView}
        />
        <TextInputWrapper
          className={cssClasses.searchContainer}
          hint="Search in 20,000+ products"
        >
          <CiSearch className={cssClasses.searchIcon} />
        </TextInputWrapper>
        <img src={logo} alt="Logo" />
        <RightMenuNav />
        <div className={cssClasses.cartIconContainer}>
          <CounterWrapper count="0">
            <IoBasketOutline className={cssClasses.cartIcon} />
          </CounterWrapper>
        </div>
      </section>
      {viewMobileMenu && (
        <>
          <div className={cssClasses.overlayContainer}></div>
          <div className={cssClasses.mobileMenu}>
            <IoCloseOutline
              onClick={handleMobileMenuView}
              style={{
                backgroundColor: "transparent",
                width: "40px",
                height: "40px",
              }}
            />
            <ul>
              <MenuNav title="Home" />
              <MenuNav title="Shop" />
              <MenuNav title="Gallery" />
              <MenuNav title="Blog" />
              <MenuNav title="Contact Us" />
            </ul>
          </div>
        </>
      )}
      <section className={cssClasses.subContainer}>
        <MenuWrapper>
          <MenuNav title="Home" />
          <MenuNav title="Shop" />
          <MenuNav title="Gallery" />
          <MenuNav title="Blog" />
          <MenuNav title="Contact Us" />
        </MenuWrapper>
      </section>
      <TextInputWrapper
        className={cssClasses.searchTwoContainer}
        hint="Search in 20,000+ products"
      >
        <p>All</p>
      </TextInputWrapper>
    </>
  );
};

export default Header;
