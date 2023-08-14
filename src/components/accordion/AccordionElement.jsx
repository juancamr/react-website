import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionELement({ question, answer, index }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index + 1}a-content`}
        id={`panel${index + 1}a-header`}
      >
        <p className="font-medium text-gray-800 text-xl">{question}</p>
      </AccordionSummary>
      <AccordionDetails>
        <p className="text-lg font-light">{answer}</p>
      </AccordionDetails>
    </Accordion>
  );
}
