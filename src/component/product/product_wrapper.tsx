import CategoryWrapper from "../category_wrapper/category_wrapper";
import ProductContainer from "./product_container";

import chair1 from "../../assets/jpg/4.jpg";
import chair2 from "../../assets/jpg/5.jpg";
import chair3 from "../../assets/jpg/8.jpg";
import chair4 from "../../assets/jpg/10.jpg";

// import cssClasses from "./product_wrapper.module.css";
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

import cssClasses from "./product_wrapper.module.css";
import * as React from "react";

const ProductWrapper: React.FC<{
  title?: string;
  nav1?: string;
  nav2?: string;
}> = (props) => {
  return (
    <CategoryWrapper
      title={props.title}
      navTitle1={props.nav1}
      navTitle2={props.nav2}
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="productCustomSwiper"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          375: { slidesPerView: 1, spaceBetween: 20 },
          414: { slidesPerView: 1, spaceBetween: 20 },
          480: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          820: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 4, spaceBetween: 30 },
          1600: { slidesPerView: 4, spaceBetween: 30 },
          1920: { slidesPerView: 4, spaceBetween: 30 },
          2560: { slidesPerView: 5, spaceBetween: 30 },
          3840: { slidesPerView: 6, spaceBetween: 40 },
        }}
      >
        <SwiperSlide>
          <ProductContainer
            img={chair1}
            sale="-5%"
            featuredProduct="FEATURED"
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductContainer
            newProduct="NEW"
            img={chair2}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductContainer
            img={chair3}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductContainer
            featuredProduct="FEATURED"
            img={chair4}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductContainer
            newProduct="NEW"
            img={chair2}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductContainer
            img={chair3}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </SwiperSlide>
      </Swiper>
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
  );
};
export default ProductWrapper;
