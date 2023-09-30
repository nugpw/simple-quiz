import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../components/ErrorMessage";
import { Helmet } from "react-helmet";

const Home = ({ name, setName, fetchQuestions }) => {

  const [error, setError] = useState(false);

  const history = useNavigate();

  const handleSubmit = () => {
    if (!name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions();
      history("/quiz");
    }
    
  };

  return (
    <><Helmet><title>Home</title></Helmet>
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Enter Your Name</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Enter Your Name!</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Home;
