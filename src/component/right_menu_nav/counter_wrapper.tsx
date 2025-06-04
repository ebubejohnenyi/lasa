import { ReactNode } from "react";

const CounterWrapper: React.FC<{
  counterWrapperClass: string;
  customClass?: string;
  children: ReactNode;
  count: number;
}> = (props) => {
  return (
    <div className={props.counterWrapperClass}>
      <span className={props.customClass}>{props.count}</span>
      {props.children}
    </div>
  );
};

export default CounterWrapper;
