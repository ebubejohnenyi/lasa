import HeaderNavigationContainer from "../../component/header_nav_container/header_nav_container";
import { FaStar } from "react-icons/fa";
import cssClasses from "./product_detail.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import ProductPayCard from "../../component/product/product_pay_card";
import ProductSecondPoint from "../../component/product/product_second_point";
import ProductWrapper from "../../component/product/product_wrapper";
import Divider from "../../component/divider/divider";
import { LoaderFunctionArgs, useRouteLoaderData } from "react-router-dom";
import { Product, amountFormatter } from "../../model/product/product";

const ProductDetail: React.FC = () => {
  const detailsData = useRouteLoaderData("product-detail");
  console.log("Product Details -> ", detailsData);
  return (
    <section>
      <HeaderNavigationContainer
        title="Home"
        currentPageTitle="Chair"
        customClassName={cssClasses.container}
      />
      <div className={cssClasses.wrapper}>
        <img
          className={cssClasses.productImage}
          src={detailsData.imagePath}
          alt="Image"
        />
        <div className={cssClasses.secondWrapper}>
          <div className={cssClasses.firstPoint}>
            <h2>{detailsData.name}</h2>
            <section className={cssClasses.stars}>
              <FaStar color="brown" />
              <FaStar color="brown" />
              <FaStar color="brown" />
              <FaStar color="brown" />
            </section>
            <p>{amountFormatter(detailsData.price)}</p>
            <article>{detailsData.description}</article>
          </div>
          <ProductSecondPoint size={detailsData.size} />
          <div className={cssClasses.detailsWrapper}>
            <p>
              Category: <span>{detailsData.category}</span>
            </p>
            <p>
              Tags: <span>Activity tracker, Digital Watch</span>
            </p>
            <p>
              Brand: <span>Paloma Picasso</span>
            </p>
          </div>
          <div className={cssClasses.socialMediaIconsWrapper}>
            <FaFacebook className={cssClasses.socialMediaIcons} />{" "}
            <FaInstagram className={cssClasses.socialMediaIcons} />{" "}
            <FaLinkedinIn className={cssClasses.socialMediaIcons} />{" "}
            <FaTwitter className={cssClasses.socialMediaIcons} />
          </div>
          <ProductPayCard />
        </div>
      </div>
      <h1 style={{ textAlign: "center", margin: "1rem 0" }}>Related Product</h1>
      <Divider />
      <ProductWrapper />
    </section>
  );
};

export default ProductDetail;

const loader = async ({ params }: LoaderFunctionArgs) => {
  const productId = params.id;
  const response = await fetch(
    "https://gist.githubusercontent.com/ebubejohnenyi/6c7234bc14d71bc47ad92bbea08a693d/raw/2676016d8688cbb5ebe54ad4ff18d0103cbd340b/gistfile1.txt"
  );

  if (!response.ok) {
    throw new Error("Failed to Fetch Product Details");
  }

  const responseData = await response.json();

  const product = responseData.find(
    (item: Product) => item.id === Number(productId)
  );

  if (!product) {
    throw new Error("Product Not Found");
  }
  console.log("Found Product -> ", product);

  return product;
};

export { loader };
