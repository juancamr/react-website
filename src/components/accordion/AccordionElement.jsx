import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionELement({ question, answer, index }) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index + 1}a-content`}
        id={`panel${index + 1}a-header`}
      >
        <Typography>
          <p className="font-bold text-gray-800 text-xl">{question}</p>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <p className="text-lg">{answer}</p>
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
