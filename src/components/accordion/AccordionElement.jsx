import "./AccordionElement.css";

export default function AccordionELement({ question, answer, index }) {
  return (
    <div className="accordion-item" id={`question${index}`}>
      <a className="accordion-link" href={`#question${index}`}>
        <div className="flex">
          <h3>{question}</h3>
        </div>
        <i class="fa-solid fa-arrow-right"></i>
        <i class="fa-solid fa-arrow-down"></i>
      </a>
      <div className="answer">
        <p>{answer}</p>
      </div>
      <hr />
    </div>
  );
}
