import AdsBlock from "../../component/ads_block/ads_block";
import BigCardWrapper from "../../component/big_card/big_card_wrapper";
import CategoryContainer from "../../component/category_wrapper/category_container";
import CategoryWrapper from "../../component/category_wrapper/category_wrapper";
import Header from "../../component/header/header";
import ProductContainer from "../../component/product/product_container";
import Swipe from "../../component/swiper_container/swipe";

import chair1 from "../../assets/jpg/4.jpg";
import chair2 from "../../assets/jpg/5.jpg";
import chair3 from "../../assets/jpg/8.jpg";
import chair4 from "../../assets/jpg/10.jpg";

import cssClasses from "./home.module.css";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Swipe />
      <CategoryContainer />
      <BigCardWrapper />
      <AdsBlock />
      <CategoryWrapper title="Trending Items">
        <div className={cssClasses.trendingWrapper}>
          <ProductContainer
            img={chair1}
            sale="-5%"
            featuredProduct="FEATURED"
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            newProduct="NEW"
            img={chair2}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            img={chair3}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            img={chair4}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </div>
      </CategoryWrapper>
    </>
  );
};

export default Home;
