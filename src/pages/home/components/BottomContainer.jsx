import Container from "../../../components/Container";
import Download from "../../../components/Download";
import Newsletter from "../../../components/Newsletter";
import { home } from "../../../common/content";

const BottomContainer = () => {
  const { headingDownload, paragraphDownload } = home.downloadSection;
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <Download
          heading={headingDownload}
          subHeading={paragraphDownload}
          users
        />
        <Newsletter />
      </div>
    </Container>
  );
};

export default BottomContainer;
