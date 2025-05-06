import AdsBlock from "../../component/ads_block/ads_block";
import BigCardWrapper from "../../component/big_card/big_card_wrapper";
import CategoryContainer from "../../component/category_wrapper/category_container";
import CategoryWrapper from "../../component/category_wrapper/category_wrapper";
import Header from "../../component/header/header";
import ProductContainer from "../../component/product/product_container";
import Swipe from "../../component/swiper_container/swipe";

import chair1 from "../../assets/jpg/4.jpg";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Swipe />
      <CategoryContainer />
      <BigCardWrapper />
      <AdsBlock />
      <CategoryWrapper title="Trending Items">
        <ProductContainer
          img={chair1}
          productName="Joler secieved elbraew"
          price="$290 - $350"
        />
      </CategoryWrapper>
    </>
  );
};

export default Home;
