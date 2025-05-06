import chair3 from "../../assets/png/3.png";
import chair4 from "../../assets/png/4.png";
import chair12 from "../../assets/png/12.png";
import BigCard from "../../component/big_card/big_card";
import cssClasses from "./big_card.module.css";

const BigCardWrapper: React.FC = () => {
  return (
    <section className={cssClasses.containerWrapper}>
      <div>
        <BigCard
          title="New Arrival"
          name="Up To 40% off Top Lamps Brands"
          buttonName="SHOP NOW"
          imagePath={chair12}
        />
        <BigCard
          title="New Arrival"
          name="Up To 20% off Top Cabinets"
          buttonName="SHOP NOW"
          imagePath={chair3}
        />
      </div>
      <BigCard
        title="BIG SALE"
        name="Up To 75% Off Furniture & Decor"
        buttonName="SHOP NOW"
        imagePath={chair4}
        isBig={true}
      />
    </section>
  );
};
export default BigCardWrapper;
