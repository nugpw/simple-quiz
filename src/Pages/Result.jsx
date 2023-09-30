import { Button } from "@mui/material";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";


const Result = ({ name, score, }) => {
  const history = useNavigate();

  useEffect(() => {
    if (!name) {
      history("/");
    }
  }, [name, history]);

  return (
    <><Helmet><title>Result</title></Helmet>
    <div className="result">
      <span className="summary">Name : {name}</span>
      <span className="summary">Final Score : {score}</span>
      <span className="summary">Correct Answer : {score/10}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
    </>
  );
};

export default Result;
