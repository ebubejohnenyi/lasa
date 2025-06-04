import ProductContainer from "../../component/product/product_container";
import cssClasses from "./shop_content_wrapper.module.css";

import products from "../../data/data.ts";
import { useFetch } from "../../hooks/useFetch.ts";
import { amountFormatter } from "../../model/product/product.ts";
import SideMenu from "../../component/side_menu/side_menu.tsx";

const ShopContentWrapper: React.FC = () => {
  const listOfProduct = useFetch(products);

  return (
    <div className={cssClasses.wrapper}>
      <SideMenu />
      <section className={cssClasses.content}>
        <div className={cssClasses.trendingWrapper}>
          {listOfProduct.slice(0, 12).map((product) => (
            <ProductContainer
              key={product.id}
              productName={product.name}
              img={product.imagePath}
              price={amountFormatter(Number(product.price))}
              featuredProduct={product.featured}
              sale={product.discount}
              newProduct={product.new}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShopContentWrapper;
