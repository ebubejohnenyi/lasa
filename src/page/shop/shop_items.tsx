import ProductContainer from "../../component/product/product_container.tsx";
import cssClasses from "./shop_items.module.css";

import { useFetch } from "../../hooks/useFetch.ts";
import { amountFormatter, Product } from "../../model/product/product.ts";
import SideMenu from "../../component/side_menu/side_menu.tsx";
import LoadingIcon from "../../component/loading_icon/loading_icon.tsx";
import { useDispatch } from "react-redux";
import { productAction } from "../../store/product_slice.ts";
import { toast } from "react-toastify";

const ShopItems: React.FC = () => {
  const { data: products, isLoading } = useFetch();
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(productAction.addToCart(product));
    toast("Item successfully added to cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      icon: (
        <span role="img" aria-label="checkmark">
          ✅
        </span>
      ),
    });
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
                  linkTo={String(product.id)}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ShopItems;
