import { ReactNode } from "react";
import TextInput from "./text_input";

const TextInputWrapper: React.FC<{
  children: ReactNode;
  className: string;
  hint?: string;
}> = (props) => {
  return (
    <div className={props.className}>
      <TextInput hintText={props.hint!} />
      {props.children}
    </div>
  );
};

export default TextInputWrapper;
