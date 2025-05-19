import cssClasses from "./shop_round_card.module.css";
const ShopRoundCard: React.FC<{ imagePath: string; title: string }> = (
  props
) => {
  return (
    <section className={cssClasses.card}>
      <div className={cssClasses.container}>
        <img src={props.imagePath} alt={props.title} />
      </div>
      <div className={cssClasses.text}>
        <h1>{props.title}</h1>
      </div>
    </section>
  );
};

export default ShopRoundCard;
