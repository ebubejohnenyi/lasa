import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBasketOutline, IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import TextInputWrapper from "../input/text_input_wrapper";
import MenuNav from "../menu_nav/menu_nav";
import MenuWrapper from "../menu_nav/menu_wrapper";
import CounterWrapper from "../right_menu_nav/counter_wrapper";
import RightMenuNav from "../right_menu_nav/right_menu_nav";
import cssClasses from "./header.module.css";
import logo from "../../assets/png/logo.png";

const Header: React.FC = () => {
  const [viewMobileMenu, setViewMobileMenu] = useState(false);

  function handleMobileMenuView() {
    setViewMobileMenu(() => !viewMobileMenu);
  }

  return (
    <div className={cssClasses.headerContainer}>
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
              <MenuNav navPath="/" title="Home" />
              <MenuNav navPath="shop" title="Shop" />
              <MenuNav navPath="gallery" title="Gallery" />
              <MenuNav navPath="shop-page" title="Blog" />
              <MenuNav navPath="contact-us" title="Contact Us" />
            </ul>
          </div>
        </>
      )}
      <section className={cssClasses.subContainer}>
        <MenuWrapper>
          <MenuNav navPath="/" title="Home" />
          <MenuNav navPath="shop" title="Shop" />
          <MenuNav navPath="gallery" title="Gallery" />
          <MenuNav navPath="shop-page" title="Blog" />
          <MenuNav navPath="contact-us" title="Contact Us" />
        </MenuWrapper>
      </section>
      <TextInputWrapper
        className={cssClasses.searchTwoContainer}
        hint="Search in 20,000+ products"
      >
        <p>All</p>
      </TextInputWrapper>
    </div>
  );
};

export default Header;
