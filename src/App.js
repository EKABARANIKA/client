import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import QuizPage from "./pages/QuizPage/QuizPage";
import EndPage from "./pages/EndPage/EndPage";
import LogoPage from "./pages/Logo/logo";
import "./App.css";

function App() {
  const [showLogo, setShowLogo] = useState(true);
  const navigate = useNavigate();

  const handleLogoComplete = () => {
    setShowLogo(false); // Hide the logo page
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="App">
      {showLogo ? (
        <LogoPage onLogoComplete={handleLogoComplete} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route
            path="/complete"
            element={
              <EndPage
                onRestart={() => window.location.replace("/")}
                onShare={() => console.log("Sharing results...")}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
