import cssClasses from "./card_category.module.css";
const CardCategory: React.FC<{ title: string; imgPath: string }> = (props) => {
  return (
    <section className={cssClasses.wrapper}>
      <img src={props.imgPath} alt={props.imgPath} />
      <h2>{props.title}</h2>
    </section>
  );
};
export default CardCategory;
