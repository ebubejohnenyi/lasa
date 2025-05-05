import cssClasses from "./text_input.module.css";
const TextInput: React.FC<{ hintText: string }> = (props) => {
  return (
    <input
      className={cssClasses.input}
      placeholder={props.hintText}
      type="text"
    />
  );
};
export default TextInput;
