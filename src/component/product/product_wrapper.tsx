import CategoryWrapper from "../category_wrapper/category_wrapper";
import ProductContainer from "./product_container";

import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

import cssClasses from "./product_wrapper.module.css";
import * as React from "react";
import products from "../../data/data";
import { useFetch } from "../../hooks/useFetch.ts";
import { amountFormatter, Product } from "../../model/product/product.ts";

function getRandomProducts(products: Product[], count: number) {
  return [...products].sort(() => Math.random() - 0.5).slice(0, count);
}

const ProductWrapper: React.FC<{
  title?: string;
  nav1?: string;
  nav2?: string;
}> = (props) => {
  const listOfProduct = useFetch(products);
  const randomProducts = getRandomProducts(listOfProduct, 5);
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
        {randomProducts.slice(0, 6).map((product) => (
          <SwiperSlide>
            <ProductContainer
              key={product.id}
              img={product.imagePath}
              price={amountFormatter(Number(product.price))}
              productName={product.name}
              featuredProduct={product.featured}
              newProduct={product.new}
              sale={product.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cssClasses.trendingWrapper}>
        {randomProducts.map((product) => (
          <ProductContainer
            key={product.id}
            img={product.imagePath}
            price={amountFormatter(Number(product.price))}
            productName={product.name}
            featuredProduct={product.featured}
            newProduct={product.new}
            sale={product.discount}
          />
        ))}
      </div>
    </CategoryWrapper>
  );
};
export default ProductWrapper;
