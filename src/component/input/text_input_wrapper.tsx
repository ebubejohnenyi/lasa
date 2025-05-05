import { ReactNode } from "react";
import TextInput from "./text_input";

const TextInputWrapper: React.FC<{ children: ReactNode; className: string }> = (
  props
) => {
  return (
    <div className={props.className}>
      <TextInput hintText="Search in 20,000+ products" />
      {props.children}
    </div>
  );
};

export default TextInputWrapper;
