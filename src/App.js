import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
    );
    setQuestions(data.results);
  };

  return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />}>
            
          </Route>
          <Route path="/quiz" element={
            <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
          }>
          </Route>
          <Route path="/result" element={
            <Result name={name} score={score} />
          }>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
