import cssClasses from "./loading_icon.module.css";
const LoadingIcon: React.FC = () => {
  return (
    <svg className={cssClasses.svgWrapper} viewBox="25 25 50 50">
      <circle
        className={cssClasses.circleContainer}
        r="20"
        cy="50"
        cx="50"
      ></circle>
    </svg>
  );
};

export default LoadingIcon;
