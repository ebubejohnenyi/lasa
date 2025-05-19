import FilledButton from "../button/filledButton";

const AdsBlock: React.FC<{
  title: string;
  description?: string;
  buttonName?: string;
  // imgPath?: string;
  firstHeaderTitle?: string;
  headerTitle?: string;
  code?: string;
  className: string;
  secondaryClassName?: string;
}> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section className={props.className}>
        <div className={props.secondaryClassName}>
          {props.firstHeaderTitle && <h3>{props.firstHeaderTitle}</h3>}
          {props.headerTitle && <h3>{props.headerTitle}</h3>}
          <div style={{ backgroundColor: "transparent" }}>
            <h1>{props.title}</h1>
            <p>
              {props.description}
              {props.code && (
                <strong
                  style={{ backgroundColor: "transparent", marginLeft: "5px" }}
                >
                  {props.code}
                </strong>
              )}
            </p>
          </div>
          {props.buttonName && <FilledButton name={props.buttonName!} />}
        </div>
      </section>
    </div>
  );
};
export default AdsBlock;
