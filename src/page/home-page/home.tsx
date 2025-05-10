import AdsBlock from "../../component/ads_block/ads_block";
import BigCardWrapper from "../../component/big_card/big_card_wrapper";
import CategoryContainer from "../../component/category_wrapper/category_container";
import Header from "../../component/header/header";
import ProductWrapper from "../../component/product/product_wrapper";
import Swipe from "../../component/swiper_container/swipe";
import cssClasses from "../../component/ads_block/ads_block.module.css";
import NewsLetter from "../../component/newsletter/newsletter";
import Footer from "../../component/footer/footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Swipe />
      <CategoryContainer />
      <BigCardWrapper />
      <AdsBlock
        className={cssClasses.container}
        secondaryClassName={cssClasses.contentContainer}
        firstHeaderTitle="10%"
        title="Get more pay less"
        description="On orders $500 + use coupon code:"
        code="LASA1234"
      />
      <ProductWrapper title="Trending Items" />
      <AdsBlock
        className={cssClasses.container2}
        secondaryClassName={cssClasses.contentContainer2}
        headerTitle="FURNITURE - LIGHTING"
        title="Modern And Contemporary Furniture"
        buttonName="Shop Now"
      />
      <ProductWrapper nav1="BEST SELLERS" nav2="NEWEST PRODUCTS" />
      <NewsLetter
        title="Get Discount 20% Off"
        description="Subscribe our newsletter and get discount 20% off"
      />
      <Footer />
    </>
  );
};

export default Home;
