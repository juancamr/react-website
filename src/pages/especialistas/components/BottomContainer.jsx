import Container from "../../../components/Container";
import Qa from "../../../components/qa/Q&A";
import { questions } from "../../../common/questions/especialistas";
import Download from "../../../components/Download";
import { especialistas } from "../../../common/content";

const BottomContainer = () => {
  const { headingDownload, paragraphDownload } = especialistas.downloadSection;
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <Download
            heading={headingDownload}
            subHeading={paragraphDownload}
            users={false}
            isBlack
          />
        </div>
        <Qa heading="Preguntas?" questions={questions} />
      </div>
    </Container>
  );
};

export default BottomContainer;
