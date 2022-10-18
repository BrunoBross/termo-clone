import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import InfoModal from "./components/InfoModal";

export default function App() {
  const correctAnswer = "BANANA";
  const [attempt, setAttempt] = useState(1);
  const [isWin, setIsWin] = useState(false);

  const handleCheckAnswer = (answer: string) => {
    console.log("Tentativa de numero: " + attempt);
    setAttempt(attempt + 1);

    if (answer === correctAnswer) {
      console.log("Você acertou, a resposta era: " + answer);
      setIsWin(true);
    } else {
      console.log("Sua resposta: " + answer);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="buttons-left">
          <div className="button">X</div>
          <div className="button">X</div>
        </div>
        <h1 className="title">TERMO</h1>
        <div className="buttons-right">
          <div className="button">X</div>
          <div className="button">X</div>
        </div>
      </header>

      <Game
        attempt={attempt}
        handleCheckAnswer={handleCheckAnswer}
        correctAnswer={correctAnswer}
      />

      <div className="keyboard"></div>

      <InfoModal />
    </div>
  );
}
