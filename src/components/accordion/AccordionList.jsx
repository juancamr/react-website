import * as React from "react";
import AccordionELement from "./AccordionElement";

export default function AccordionList({ questions }) {
  return (
    <div>
      {questions.map((question, index) => (
        <AccordionELement
          question={question.question}
          answer={question.answer}
          index={index + 1}
        />
      ))}
    </div>
  );
}
