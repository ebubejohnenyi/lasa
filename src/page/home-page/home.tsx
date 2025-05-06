import BigCardWrapper from "../../component/big_card/big_card_wrapper";
import CategoryContainer from "../../component/category_wrapper/category_container";
import Header from "../../component/header/header";
import Swipe from "../../component/swiper_container/swipe";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Swipe />
      <CategoryContainer />
      <BigCardWrapper />
    </>
  );
};

export default Home;
