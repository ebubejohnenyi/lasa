import cssClasses from "./ads_block.module.css";
import chair1 from "../../assets/png/14.png";

const AdsBlock = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section className={cssClasses.container}>
        <h1>10%</h1>
        <div style={{ backgroundColor: "transparent" }}>
          <h2>Get more pay less</h2>
          <p>
            On orders $500 + use coupon code:{" "}
            <strong style={{ backgroundColor: "transparent" }}>LASA2025</strong>
          </p>
        </div>
        <img
          src={chair1}
          alt="Image"
          style={{ backgroundColor: "transparent" }}
        />
      </section>
    </div>
  );
};
export default AdsBlock;
