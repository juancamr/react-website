import { Fade } from "react-reveal";
import Comments from "../../components/comments/Comments";
import { usersComments } from "../../common/constants";

const Especialistas = () => {
  return (
    <main id="especialistas-main" className="py-14 lg:py-20 px-4 home-container min-h-screen space-y-16 md:space-y-20 xl:space-y-40">
      <div className="grid md:grid-cols-2 md:w-3/4 mx-auto">
        <div>
          <h1 className="text-slate-50 text-3xl xl:text-5xl font-bold mb-5 text-center md:text-left">
            Descubre que opinan de nosotros!
          </h1>
        </div>
        <Fade right>
          <Comments comments={usersComments} color="blue" />
        </Fade>
      </div>
    </main>
  );
};

export default Especialistas;
