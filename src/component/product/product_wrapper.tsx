import CategoryWrapper from "../category_wrapper/category_wrapper";
import ProductContainer from "./product_container";

import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

import cssClasses from "./product_wrapper.module.css";
import * as React from "react";
import { useFetch } from "../../hooks/useFetch.ts";
import { amountFormatter, Product } from "../../model/product/product.ts";
import LoadingIcon from "../loading_icon/loading_icon.tsx";
import { productAction } from "../../store/product_slice.ts";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function getRandomProducts(products: Product[], count: number) {
//   return [...products].sort(() => Math.random() - 0.5).slice(0, count);
// }

const ProductWrapper: React.FC<{
  title?: string;
  nav1?: string;
  nav2?: string;
}> = (props) => {
  const { data: products, isLoading, isError } = useFetch();
  // const randomProducts = getRandomProducts(products!, 5);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    dispatch(productAction.addToCart(product));
  };

  // const handleNavigation = (product: Product) => {
  //   navigate(`shop/${product.id}`);
  // };

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
        {products?.slice(0, 6).map((product) => (
          <SwiperSlide>
            <ProductContainer
              key={product.id}
              img={product.imagePath}
              price={amountFormatter(Number(product.price))}
              productName={product.name}
              featuredProduct={product.featured}
              newProduct={product.new}
              sale={product.discount}
              addToCart={() => handleAddToCart(product)}
              onNavigate={String(product.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cssClasses.trendingWrapper}>
        {isError && <p>Error Occurred Fetching Data!!!</p>}
        {isLoading && <LoadingIcon />}
        {products?.map((product) => (
          <ProductContainer
            key={product.id}
            img={product.imagePath}
            price={amountFormatter(Number(product.price))}
            productName={product.name}
            featuredProduct={product.featured}
            newProduct={product.new}
            sale={product.discount}
            addToCart={() => handleAddToCart(product)}
            onNavigate={String(product.id)}
          />
        ))}
      </div>
    </CategoryWrapper>
  );
};
export default ProductWrapper;
