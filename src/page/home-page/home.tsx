import AdsBlock from "../../component/ads_block/ads_block";
import BigCardWrapper from "../../component/big_card/big_card_wrapper";
import CategoryContainer from "../../component/category_wrapper/category_container";
import Header from "../../component/header/header";
import ProductWrapper from "../../component/product/product_wrapper";
import Swipe from "../../component/swiper_container/swipe";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Swipe />
      <CategoryContainer />
      <BigCardWrapper />
      <AdsBlock />
      <ProductWrapper />
    </>
  );
};

export default Home;
