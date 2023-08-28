import Container from "../../../components/Container";
import { aboutUs } from "../../../common/content";

const MissionVission = () => {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-10">
        {aboutUs.mission.map((element, index) => (
          <div
            index={index}
            className="flex space-x-4 md:space-x-6 lg:space-x-8"
          >
            <div>
              <div className="bg-orange-100 p-2 rounded-xl">
                <i
                  className={`${element.icon} text-orange-500 text-3xl
                md:text-4xl
              lg:text-5xl
              `}
                ></i>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase mb-5">
                {element.name}
              </h3>
              <p className="text-base text-gray-600">{element.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MissionVission;
