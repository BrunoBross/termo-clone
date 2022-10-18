import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";

interface ApiResponse {
  word: string;
  count: number;
  id: number;
  character: string;
}

export default function App() {
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [attempt, setAttempt] = useState(1);
  const [isWin, setIsWin] = useState(false);

  const handleCheckAnswer = (answer: string) => {
    setAttempt(attempt + 1);

    if (answer.toUpperCase() === correctAnswer) {
      setIsWin(true);
    }
  };

  useEffect(() => {
    const availableAnswers = [
      "BATATA",
      "BARATA",
      "EMBORA",
      "HOSTIL",
      "ESCOPO",
      "EXCETO",
      "GENTIL",
      "UTOPIA",
      "ALHEIO",
    ];

    setCorrectAnswer(availableAnswers[Math.floor(Math.random() * 9)]);
  }, []);

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

      {!isWin ? (
        <Game
          attempt={attempt}
          handleCheckAnswer={handleCheckAnswer}
          correctAnswer={correctAnswer}
        />
      ) : (
        <h1>Você acertou, a palavra era: {correctAnswer}</h1>
      )}

      <div className="keyboard"></div>
    </div>
  );
}
