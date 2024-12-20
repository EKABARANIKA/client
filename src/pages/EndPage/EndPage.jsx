import React from "react";
import "./EndPage.css";
import { PartyingFace } from "../../assets/images";
import Button from "../../components/button/Button";

const EndPage = ({ onRestart, onShare }) => {
  return (
    <div className="quiz-complete-container">

     <div className="quiz-content">
          <img src={PartyingFace} alt="PartyingFace" />
      
          <h1 className="quiz-title"><span className="highlight">Quik</span>Quiz Complete!</h1>
          <p className="quiz-description">Awesome job completing a QuikQuiz.
             Your results are zooming their way to your inbox.
             Sharing is caring, don't forget to show off your knowledge to friends and fam!
          </p>
     </div>

      <div className="quiz-actions">
        <Button onClick={onRestart} className="start-btn">
          Start Over 👊
        </Button>
        <Button onClick={onShare} className="share-button">
        Share My Results 📣
        </Button>
      </div>
    </div>
  );
};

export default EndPage;
