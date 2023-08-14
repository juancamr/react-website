import * as React from "react";
import AccordionELement from "./AccordionElement";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ADMIN_URL } from "../../common/constants";

export default function AccordionList({ questions }) {
  return (
    <div>
      {questions.map((question, index) => {
        const word = question.answer.slice(-5);
        if (word.includes("clic")) {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
              >
                <p className="font-medium text-gray-800 text-xl">
                  {question.question}
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-lg font-light">
                  {question.answer}{" "}
                  <a
                    target="_blank"
                    href={`${ADMIN_URL}/terms.html`}
                    className="text-blue-500 transition-colors hover:text-blue-600"
                  >
                    AQU&Iacute;
                  </a>{" "}
                </p>
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return (
            <AccordionELement
              question={question.question}
              answer={question.answer}
              index={index}
            />
          );
        }
      })}
    </div>
  );
}
