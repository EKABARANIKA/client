import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizQuestion from "./QuizQuestion/QuizQuestion";
import { AltImgOne, AltImgThree, AltImgTwo, ImgOne, ImgThree, ImgTwo } from "../../assets/images";


const questions = [
  {
    id: 1,
    question: "Identify this artist, known for merging traditional Japanese art with pop culture.",
    image: ImgOne,
    altImage: AltImgOne,
    options: ["Takashi Murakami", "Jeff Koons", "Yoshitomo Nara"],
    correctAnswer: "Takashi Murakami",
    info:"info",
  },
  {
    id: 2,
    question: "How many wins does Floyd Mayweather have in his professional boxing career?",
    image: ImgTwo,
    altImage: AltImgTwo,
    options: ["50 wins, 0 losses, 0 draws", "50 wins, 1 loss, 0 draws", "49 wins, 0 losses, 1 draw"],
    correctAnswer: "50 wins, 0 losses, 0 draws",
    info:"info",
  },
  {
    id: 3,
    question: "How long has Apple reportedly been developing the new Vision Pro for?",
    image: ImgThree,
    altImage: AltImgThree,
    options: ["5 years", "+15 years", "10 years"],
    correctAnswer: "+15 years",
    info:"info",
  }
];

function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      navigate("/complete");
    }
  };

  return (
    <div className="Quiz-Page">
      {currentQuestionIndex < questions.length ? (
        <QuizQuestion
          key={currentQuestionIndex}
          question={questions[currentQuestionIndex].question}
          image={questions[currentQuestionIndex].image}
          altImage={questions[currentQuestionIndex].altImage}
          options={questions[currentQuestionIndex].options}
          correctAnswer={questions[currentQuestionIndex].correctAnswer}
          info={questions[currentQuestionIndex].info}
          onNext={handleNext}
          currentPage={currentQuestionIndex + 1}
          totalPages={questions.length}
        />
      ) : null}
    </div>
  );
}

export default QuizPage;