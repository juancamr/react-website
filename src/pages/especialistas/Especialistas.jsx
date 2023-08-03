import { Fade } from "react-reveal";
import Comments from "../../components/comments/Comments";
import { usersComments } from "../../common/constants";
import { useEffect } from "react";
import Heading from "../../components/text/Heading";
import Paragraph from "../../components/text/Paragraph";

const Especialistas = () => {
  useEffect(() => {
    document.getElementById("Especialistas").classList.add("active");
  });
  return (
    <main
      id="especialistas-main"
      className="py-40 lg:py-20 px-4 home-container min-h-screen space-y-16 md:space-y-20 xl:space-y-40"
    >
      <div className="grid md:grid-cols-2 md:w-3/4 mx-auto">
        <div className="flex items-center">
          <div>
            <Heading className="text-slate-50 mb-3">
              Se uno de nuestros satisfechos especialistas <br /> ...
            </Heading>
            <Paragraph className={"text-slate-50"}>
              Deslize para interactuar
            </Paragraph>
          </div>
        </div>
        <Fade right>
          <Comments comments={usersComments} color="blue" />
        </Fade>
      </div>
    </main>
  );
};

export default Especialistas;
