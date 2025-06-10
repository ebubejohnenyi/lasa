import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoBasketOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import TextInputWrapper from "../input/text_input_wrapper";
import MenuNav from "../menu_nav/menu_nav";
import MenuWrapper from "../menu_nav/menu_wrapper";
import CounterWrapper from "../right_menu_nav/counter_wrapper";
import TopRightMenuNav from "../right_menu_nav/top_right_menu_nav";
import cssClasses from "./header.module.css";
import logo from "../../assets/png/logo.png";
import MobileDrawer from "../mobile_menu/mobile_drawer";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../../store/central_state";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const products = useTypedSelector((state) => state.product.products);
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
        <TopRightMenuNav totalProduct={products.length} />
        <div className={cssClasses.cartIconContainer}>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            count={products.length}
          >
            <Link to="/cart">
              <IoBasketOutline className={cssClasses.cartIcon} />
            </Link>
          </CounterWrapper>
        </div>
      </section>
      {viewMobileMenu && (
        <MobileDrawer onMobileMenuView={handleMobileMenuView} />
      )}
      <section className={cssClasses.subContainer}>
        <MenuWrapper>
          <MenuNav navPath="/" title="Home" />
          <MenuNav navPath="shop" title="Shop" />
          <MenuNav navPath="gallery" title="Gallery" />
          <MenuNav navPath="contact-us" title="Contact Us" />
          <MenuNav navPath="product" title="Product" />
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
