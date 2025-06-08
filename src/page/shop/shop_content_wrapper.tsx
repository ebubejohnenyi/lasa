import ProductContainer from "../../component/product/product_container";
import cssClasses from "./shop_content_wrapper.module.css";

import { useFetch } from "../../hooks/useFetch.ts";
import { amountFormatter, Product } from "../../model/product/product.ts";
import SideMenu from "../../component/side_menu/side_menu.tsx";
import LoadingIcon from "../../component/loading_icon/loading_icon.tsx";
import { useDispatch } from "react-redux";
import { productAction } from "../../store/product_slice.ts";

const ShopContentWrapper: React.FC = () => {
  const { data: products, isLoading } = useFetch();
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    console.log("Click Click..");
    dispatch(productAction.addToCart(product));
  };
  return (
    <>
      {isLoading && <LoadingIcon />}
      {products && (
        <div className={cssClasses.wrapper}>
          <SideMenu />
          <section className={cssClasses.content}>
            <div className={cssClasses.trendingWrapper}>
              {products?.slice(0, 12).map((product) => (
                <ProductContainer
                  key={product.id}
                  productName={product.name}
                  img={product.imagePath}
                  price={amountFormatter(Number(product.price))}
                  featuredProduct={product.featured}
                  sale={product.discount}
                  newProduct={product.new}
                  addToCart={() => handleAddToCart(product)}
                  linkTo={product.id}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ShopContentWrapper;
