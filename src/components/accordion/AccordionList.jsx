import AccordionELement from "./AccordionElement";
import "./AccordionList.css";

const AccordionList = ({ questions }) => {
  return (
    <section>
      <div className="container">
        <div className="accordion">
          {questions.map((question, index) => (
            <AccordionELement
              question={question.question}
              answer={question.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionList;
