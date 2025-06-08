import { useCategory } from "../../hooks/useCategory";
import { Category, Size } from "../../model/product/product";
import AdsBlock from "../ads_block/ads_block";
import FilledButton from "../button/filledButton";
import CounterWrapper from "../right_menu_nav/counter_wrapper";
import ShopContentSideWrapper from "../shop_side_content_wrapper/shop_content_side_wrapper";
import ShopListContent from "../shop_side_content_wrapper/shop_list_content";
import cssClasses from "../../page/shop/shop_content_wrapper.module.css";
import { useSize } from "../../hooks/useSize";
import { useFetch } from "../../hooks/useFetch";

const SideMenu: React.FC = () => {
  const { data: products } = useFetch();
  const diningCategory = useCategory(products!, Category.DiningChair);
  const loungeCategory = useCategory(products!, Category.LoungeChair);
  const barStoolCategory = useCategory(products!, Category.BarStool);
  const coffeeTableCategory = useCategory(products!, Category.CoffeeTable);
  const floorLampCategory = useCategory(products!, Category.FloorLamp);
  const hookAndCoatCategory = useCategory(products!, Category.HookAndCoatStand);
  const pendantLightCategory = useCategory(products!, Category.PendantLight);
  const sofaCategory = useCategory(products!, Category.Sofa);
  const wallPaperCategory = useCategory(products!, Category.Wallpaper);

  const smallSize = useSize(products!, Size.S);
  const mediumSize = useSize(products!, Size.M);
  const largeSize = useSize(products!, Size.L);
  const extraLargeSize = useSize(products!, Size.XL);

  return (
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
          total={diningCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Lounge Chair"
          total={loungeCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Sofas"
          total={sofaCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Bar stools"
          total={barStoolCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Coffee Table"
          total={coffeeTableCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Pendant lights"
          total={pendantLightCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Floor lamps"
          total={floorLampCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Hooks & coat stands"
          total={hookAndCoatCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Wallpapers"
          total={wallPaperCategory.length}
          checkBox={<input type="checkbox" required />}
        />
        <ShopListContent
          title="Kitchen & dining"
          total={diningCategory.length}
          checkBox={<input type="checkbox" required />}
        />
      </ShopContentSideWrapper>
      <ShopContentSideWrapper title="Product Size">
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}
        >
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={smallSize.length}
          >
            <FilledButton className={cssClasses.productSize} name="S" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={mediumSize.length}
          >
            <FilledButton className={cssClasses.productSize} name="M" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={largeSize.length}
          >
            <FilledButton className={cssClasses.productSize} name="X" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={extraLargeSize.length}
          >
            <FilledButton className={cssClasses.productSize} name="XL" />
          </CounterWrapper>
        </div>
      </ShopContentSideWrapper>
      <ShopContentSideWrapper title="Product Tags">
        <div className={cssClasses.filledButtonWrapper}>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={7}
          >
            <FilledButton className="" name="Activity tracker" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={9}
          >
            <FilledButton className="" name="Digital watch" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={5}
          >
            <FilledButton className="" name="Fitness tracker" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={7}
          >
            <FilledButton className="" name="GPS tracking" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={4}
          >
            <FilledButton className="" name="Health monitoring" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={9}
          >
            <FilledButton className="" name="Sleeping tracking" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={6}
          >
            <FilledButton className="" name="Smart watch" />
          </CounterWrapper>
          <CounterWrapper
            counterWrapperClass={cssClasses.counterWrapper}
            customClass={cssClasses.countClass}
            count={8}
          >
            <FilledButton className="" name="Watch-resistant" />
          </CounterWrapper>
        </div>
      </ShopContentSideWrapper>
      <ShopContentSideWrapper title="Brands">
        <div></div>
      </ShopContentSideWrapper>
    </section>
  );
};

export default SideMenu;
