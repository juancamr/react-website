import { useState } from "react";
import InputSearch from "../../components/inputs/InputSearch";

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
          return questionItem.question
            .toLowerCase()
            .includes(value.toLowerCase());
        })
      );
      if (questionsList.length === 0) {
        setError(`No se encontraron resultados para "${value}"`);
      }
    }
  };
  return (
    <div className={`md:w-1/2 mx-auto ${styles}`}>
      <h1 className="text-center text-3xl text-gray-800 font-bold mb-5">
        {heading}
      </h1>
      <div className="mb-5">
        <InputSearch
          onChangeEvent={onChangeEvent}
          placeholder={searchPlaceholder}
          value={search}
        />
      </div>
      <div>
        {questionsList.map((question) => (
          <div>
            <p className="font-bold">{question.question}</p>
            <p>{question.answer}</p>
          </div>
        ))}
        <p className="text-gray-600">{error}</p>
      </div>
    </div>
  );
};

export default Qa;
