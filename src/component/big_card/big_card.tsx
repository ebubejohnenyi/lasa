import cssClasses from "./big_card.module.css";

const BigCard: React.FC<{
  title: string;
  name: string;
  buttonName: string;
  imagePath: string;
  isBig?: boolean;
}> = (props) => {
  return (
    <section
      className={`${
        props.isBig ? cssClasses.big_card_wrapper : cssClasses.wrapper
      }`}
    >
      <div style={{ backgroundColor: "transparent" }}>
        <h2>{props.title}</h2>
        <h1>{props.name}</h1>
        <button>{props.buttonName}</button>
      </div>
      <img src={props.imagePath} alt={props.imagePath} />
    </section>
  );
};

export default BigCard;
