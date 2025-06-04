import HeaderNavigationContainer from "../../component/header_nav_container/header_nav_container";
import ShopRoundCard from "../../component/shop_round_card_category/shop_round_card";
import one from "../../assets/png/11.png";
import two from "../../assets/png/4.png";
import three from "../../assets/png/5.png";
import four from "../../assets/png/7.png";
import five from "../../assets/png/9.png";
import six from "../../assets/png/6.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ShopContentWrapper from "./shop_content_wrapper";
import ShopContainer from "./shop_container";

const ShopPage: React.FC = () => {
  return (
    <section>
      <HeaderNavigationContainer title="Home" currentPageTitle="Shop" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="shopCardSwiper"
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 5 },
          375: { slidesPerView: 3, spaceBetween: 5 },
          414: { slidesPerView: 3, spaceBetween: 5 },
          480: { slidesPerView: 2, spaceBetween: 5 },
          640: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          820: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
          1440: { slidesPerView: 5, spaceBetween: 30 },
          1600: { slidesPerView: 4, spaceBetween: 30 },
          1920: { slidesPerView: 4, spaceBetween: 30 },
          2560: { slidesPerView: 5, spaceBetween: 30 },
          3840: { slidesPerView: 6, spaceBetween: 40 },
        }}
      >
        <SwiperSlide>
          <ShopRoundCard imagePath={one} title="Dining Chair" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopRoundCard imagePath={two} title="Office Chair" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopRoundCard imagePath={three} title="Sofas" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopRoundCard imagePath={five} title="Bar Stools" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopRoundCard imagePath={four} title="Pendant Lights" />
        </SwiperSlide>
        <SwiperSlide>
          <ShopRoundCard imagePath={six} title="Foamy Bed" />{" "}
        </SwiperSlide>
      </Swiper>
      <ShopContainer>
        <ShopContentWrapper />
      </ShopContainer>
    </section>
  );
};

export default ShopPage;
