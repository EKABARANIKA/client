import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Button from "../../components/button/Button";
import { Emoji } from "../../assets/images";


const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz"); 
  };

  return (
    <div className="home-page">
      
      <main>
         <img src={Emoji} alt="Emoji" className="emoji" />

    
          <h1 className="title">
               Ready for a <span className="highlight">Quik</span>Quiz?
         </h1>


         <p className="description">Gear up for a QuikQuiz sprint! You've got just 30 seconds per question. 
            Tap the info icon 🛈 at the top right to check out the module each question 
            comes from. Let's see what you've got! -{" "}<span className="highlight">Goodluck!</span>
         </p>
      </main>

      <Button onClick={startQuiz} className="start-btn">
        Start A New Quiz ✏️
      </Button>
      
    </div>
  );
};

export default Home;
