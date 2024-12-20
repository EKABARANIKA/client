import React, { useState, useEffect } from 'react';
import Button from '../../../components/button/Button';
import { Tick, Wrong, Correct, DefaultOption } from '../../../assets/icons';
import Header from '../../../components/header/header'; 
import Popup from '../../../components/pop-up/popUp'; 
import './QuizQuestion.css';

const QuizQuestion = ({
  question, image, altImage, options, correctAnswer, onNext, currentPage, totalPages, onRestart
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(30);
  const [isPaused, setIsPaused] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showAltImage, setShowAltImage] = useState(false); 
  const [pausedTime, setPausedTime] = useState(null); 

 
  useEffect(() => {
    if (timer > 0 && !isLocked && !isPaused) {
      const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !isLocked && !isPaused) {
      setPopupMessage('You Ran Out Of Time.');
      setShowPopup(true);
    }
  }, [timer, isLocked, isPaused]);

 
  const handleOptionClick = (option) => {
    if (!isLocked) setSelectedOption(option);
  };

  
  const handleLockIn = () => {
    if (selectedOption) {
      setIsLocked(true);
      setIsCorrect(selectedOption === correctAnswer);
    }
  };

  const handleExitClick = () => {
    setPopupMessage('Sure You Want To Quit?');
    setShowPopup(true);
    setIsPaused(true); 
    setPausedTime(timer); 
  };

  const handlePopupReset = () => {
    setShowPopup(false);
    setTimer(30); 
    setSelectedOption(null);
    setIsLocked(false);
    setIsCorrect(null);
    setIsPaused(false);
  };

  const handleContinueQuiz = () => {
    setShowPopup(false);
    setTimer(pausedTime); 
    setIsPaused(false); 
  };

  const handleImageToggle = () => {
    setShowAltImage((prev) => !prev); 
  };

  return (
    <div className="Quiz-Question">
      <Header
        timer={timer}
        currentPage={currentPage}
        totalPages={totalPages}
        onExitClick={handleExitClick}
      />
   
      {showAltImage ? (
        <img
          src={altImage}
          alt="Alt Question"
          className="question-image alt-image"
          onClick={handleImageToggle}
        />
      ) : (
        <>
          <h2>{question}</h2>
          {image && (
            <img
              src={image}
              alt="Question"
              className="question-image"
              onClick={handleImageToggle} 
            />
          )}

          {options.map((option) => (
            <div
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
              style={{
                borderColor: isLocked
                  ? option === correctAnswer
                    ? '#29DA30'
                    : option === selectedOption
                    ? '#D44D4D'
                    : '#7C63AB'
                  : option === selectedOption
                  ? '7A68FF'
                  : '#7C63AB',
                backgroundColor: isLocked
                  ? option === correctAnswer
                    ? '#284E3E'
                    : option === selectedOption
                    ? '#4E2828'
                    : '#35284E'
                  : option === selectedOption
                  ? '#35284E'
                  : '#35284E',
                cursor: isLocked ? 'not-allowed' : 'pointer',
              }}
            >
              <span>{option}</span>

              {!isLocked && selectedOption === option ? (
                <Tick />
              ) : isLocked && option === correctAnswer ? (
                <Correct />
              ) : isLocked && selectedOption === option && option !== correctAnswer ? (
                <Wrong />
              ) : (
                <DefaultOption />
              )}
            </div>
          ))}
        </>
      )}

      {!isLocked ? (
        <Button
          onClick={handleLockIn}
          disabled={!selectedOption}
          className="lock-btn"
        >
          Lock It In 🔒
        </Button>
      ) : (
        <Button onClick={onNext} className="next-btn">
          Next Question 👍
        </Button>
      )}

      {showPopup && (
        <Popup
          message={popupMessage}
          onRestart={handlePopupReset}
          onContinue={handleContinueQuiz}
          timer={timer}
        />
      )}
    </div>
  );
};

export default QuizQuestion;

