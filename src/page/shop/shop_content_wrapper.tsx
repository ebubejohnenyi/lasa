import ProductContainer from "../../component/product/product_container";
import cssClasses from "./shop_content_wrapper.module.css";

import chair1 from "../../assets/jpg/table8.jpg";
import chair2 from "../../assets/jpg/5.jpg";
import chair3 from "../../assets/jpg/couch8.jpg";
import chair4 from "../../assets/jpg/couch5.jpg";
import chair8 from "../../assets/jpg/7.jpg";
import chair9 from "../../assets/jpg/9.jpg";
import chair11 from "../../assets/jpg/bed1.jpg";
import chair10 from "../../assets/jpg/10.jpg";
import chair5 from "../../assets/jpg/table10.jpg";
import chair6 from "../../assets/jpg/table6.jpg";
import chair7 from "../../assets/jpg/bed5.jpg";
import chair12 from "../../assets/jpg/bed4.jpg";
import AdsBlock from "../../component/ads_block/ads_block";
import ShopContentSideWrapper from "../../component/shop_side_content_wrapper/shop_content_side_wrapper";
import ShopListContent from "../../component/shop_side_content_wrapper/shop_list_content";
import CounterWrapper from "../../component/right_menu_nav/counter_wrapper";
import FilledButton from "../../component/button/filledButton";

const ShopContentWrapper: React.FC = () => {
  return (
    <div className={cssClasses.wrapper}>
      <section className={cssClasses.sideContent}>
        <AdsBlock
          className={cssClasses.adsContainer}
          secondaryClassName={cssClasses.adsContentContainer}
          headerTitle="Sale"
          title="Now Up To 70% Off Bigger Discount"
          buttonName="Shop Now"
        />
        <ShopContentSideWrapper title="Price">
          <div></div>
        </ShopContentSideWrapper>
        <ShopContentSideWrapper title="Categories">
          <ShopListContent
            title="Dining Chair"
            total="20"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Lounge Chair"
            total="14"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Sofas"
            total="2"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Bar stools"
            total="9"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Coffee Table"
            total="8"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Pendant lights"
            total="10"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Floor lamps"
            total="6"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Hooks & coat stands"
            total="4"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Wallpapers"
            total="5"
            checkBox={<input type="checkbox" required />}
          />
          <ShopListContent
            title="Kitchen & dining"
            total="5"
            checkBox={<input type="checkbox" required />}
          />
        </ShopContentSideWrapper>
        <ShopContentSideWrapper title="Product Size">
          <div></div>
        </ShopContentSideWrapper>
        <ShopContentSideWrapper title="Product Tags">
          <div className={cssClasses.filledButtonWrapper}>
            <CounterWrapper count="7">
              <FilledButton className="" name="Activity tracker" />
            </CounterWrapper>
            <CounterWrapper count="9">
              <FilledButton className="" name="Digital watch" />
            </CounterWrapper>
            <CounterWrapper count="5">
              <FilledButton className="" name="Fitness tracker" />
            </CounterWrapper>
            <CounterWrapper count="7">
              <FilledButton className="" name="GPS tracking" />
            </CounterWrapper>
            <CounterWrapper count="4">
              <FilledButton className="" name="Health monitoring" />
            </CounterWrapper>
            <CounterWrapper count="9">
              <FilledButton className="" name="Sleeping tracking" />
            </CounterWrapper>
            <CounterWrapper count="6">
              <FilledButton className="" name="Smart watch" />
            </CounterWrapper>
            <CounterWrapper count="8">
              <FilledButton className="" name="Watch-resistant" />
            </CounterWrapper>
          </div>
        </ShopContentSideWrapper>
        <ShopContentSideWrapper title="Brands">
          <div></div>
        </ShopContentSideWrapper>
      </section>
      <section className={cssClasses.content}>
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
          <ProductContainer
            img={chair8}
            sale="-5%"
            featuredProduct="FEATURED"
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            newProduct="NEW"
            img={chair9}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            img={chair10}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            img={chair11}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            img={chair5}
            sale="-5%"
            featuredProduct="FEATURED"
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            newProduct="NEW"
            img={chair6}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            img={chair7}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
          <ProductContainer
            img={chair12}
            productName="Joler secieved elbraew"
            price="$290 - $350"
          />
        </div>
      </section>
    </div>
  );
};

export default ShopContentWrapper;
