import { useState } from "react";
import InputSearch from "../../components/inputs/InputSearch";
import AccordionList from "../accordion/AccordionList";
import CustomH2 from "../custom/CustomH2";
import { quitarTildes } from "../../utils/stringFormatter";

const Qa = ({ heading, questions, searchPlaceholder, styles }) => {
  const [search, setSearch] = useState("");
  const [questionsList, setQuestions] = useState(questions);
  const [error, setError] = useState("");

  const onChangeEvent = (event) => {
    const { value } = event.target;
    setSearch(value);
    if (value === "") {
      setQuestions(questions);
      setError("");
    } else {
      setQuestions(
        questionsList.filter((questionItem) => {
          return quitarTildes(questionItem.question.toLowerCase()).includes(
            quitarTildes(value.toLowerCase())
          );
        })
      );
      if (questionsList.length === 0) {
        setError(`No se encontraron resultados para "${value}"`);
      }
    }
  };
  return (
    <section className="px-4">
      <CustomH2 styles="text-center mb-8 text-orange-600">
        &#191;Preguntas? Aqu&iacute; te ayudamos
      </CustomH2>
      <div className={`${styles}`}>
        {/* <h1 className="text-center text-3xl text-gray-800 font-bold mb-5 z-20">
          {heading}
        </h1> */}
        {questions.length > 5 && (
          <div className="mb-5">
            <InputSearch
              onChangeEvent={onChangeEvent}
              placeholder={searchPlaceholder}
              value={search}
            />
          </div>
        )}
        <div>
          <AccordionList questions={questionsList} />
          <p className="text-gray-600 md:text-md lg:text-lg xl:text-xl">
            {error}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qa;
