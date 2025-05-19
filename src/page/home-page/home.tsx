import AdsBlock from "../../component/ads_block/ads_block";
import BigCardWrapper from "../../component/big_card/big_card_wrapper";
import CategoryContainer from "../../component/category_wrapper/category_container";
import ProductWrapper from "../../component/product/product_wrapper";
import Swipe from "../../component/swiper_container/swipe";
import cssClasses from "../../component/ads_block/ads_block.module.css";

const Home: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
