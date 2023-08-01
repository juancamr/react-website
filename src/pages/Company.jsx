import Qa from "../components/qa/Q&A";
import { questions } from "../common/questions/empresas";

const Company = () => {
  return (
    <main className="py-14 px-2 bg-slate-50">
      <Qa
        questions={questions}
        searchPlaceholder="Como me comunico..."
        heading="&#191;Su empresa tiene preguntas?"
      />
    </main>
  );
};

export default Company;
