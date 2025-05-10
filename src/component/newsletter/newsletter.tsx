import * as React from "react";
import FilledButton from "../button/filledButton";
import TextInputWrapper from "../input/text_input_wrapper";
import newLetterCssClasses from "./newsletter.module.css";

const NewsLetter: React.FC<{ title: string; description: string }> = (
  props
) => {
  return (
    <section className={newLetterCssClasses.container}>
      <div style={{ backgroundColor: "transparent" }}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div>
        <TextInputWrapper
          className={newLetterCssClasses.searchContainer}
          hint="Enter your email address"
        >
          <FilledButton name="SIGN UP" />
        </TextInputWrapper>
      </div>
    </section>
  );
};

export default NewsLetter;
