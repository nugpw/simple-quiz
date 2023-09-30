import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import { Helmet } from "react-helmet";


const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [totalQues, setTotalQues]=useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);


  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <><Helmet><title>Quiz</title></Helmet>
    <div className="quiz">
      <span className="subtitle">Halo, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            totalQues={totalQues}
            setTotalQues={setTotalQues}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
    </>
  );
};

export default Quiz;
