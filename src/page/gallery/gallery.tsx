import HeaderNavigationContainer from "../../component/header_nav_container/header_nav_container";
import cssClasses from "./gallery.module.css";
import { useFetch } from "../../hooks/useFetch";

import chair1 from "../../assets/jpg/bed2.jpg";
import chair2 from "../../assets/jpg/2.jpg";
import chair3 from "../../assets/jpg/table10.jpg";

import Divider from "../../component/divider/divider";
// import { Product } from "../../model/product/product";
import LoadingIcon from "../../component/loading_icon/loading_icon";

// function getRandomProducts(products: Product[], count: number) {
//   return [...products].sort(() => Math.random() - 0.5).slice(0, count);
// }

const Gallery: React.FC = () => {
  const { data: products, isLoading } = useFetch();
  // const listOfProduct = getRandomProducts(products!, 3);
  return (
    <section>
      <HeaderNavigationContainer
        title="Home"
        currentPageTitle="Gallery"
        customClassName={cssClasses.container}
      />
      <div className={cssClasses.wrapper}>
        <h1 style={{ textAlign: "center", margin: "1rem 0", fontSize: "3rem" }}>
          Trending Gallery
        </h1>
        <Divider />
        {isLoading && <LoadingIcon />}
        <div className={cssClasses.galleryWrapper}>
          {products!.slice(0, 12).map((product) => (
            <img src={product.imagePath} alt="Hello" />
          ))}
        </div>
        <h1 style={{ textAlign: "center", margin: "1rem 0", fontSize: "3rem" }}>
          Optimistic Gallery
        </h1>
        <Divider />
        <div className={cssClasses.galleryWrapper}>
          <img src={chair1} alt="Hello" />
          <img src={chair2} alt="Hello" />
          <img src={chair3} alt="Hello" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
