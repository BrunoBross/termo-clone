import { useEffect, useState } from "react";
import "./App.css";
import Game from "./components/Game";
import ReplayIcon from "@mui/icons-material/Replay";

export default function App() {
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
    "BRENDA",
  ];

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [attempt, setAttempt] = useState(1);
  const [isWin, setIsWin] = useState(false);
  const [isLoser, setIsLoser] = useState(false);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  const handleCheckAnswer = (answer: string) => {
    const upperAnswer = answer.toUpperCase();
    addWrongLetters(upperAnswer);
    if (upperAnswer === correctAnswer) {
      setIsWin(true);
      return;
    } else if (upperAnswer !== correctAnswer && attempt === 6) {
      setIsLoser(true);
    }
    setAttempt(attempt + 1);
  };

  const resetGame = () => {
    location.reload();
  };

  const addWrongLetters = (answer: string) => {
    const answerLetters = answer.split("");
    const newWrongLetters: string[] = [];
    answerLetters.map((letter: string) => {
      if (!correctAnswer.includes(letter)) {
        newWrongLetters.push(letter);
      }
    });
    setWrongLetters(newWrongLetters.concat(wrongLetters));
  };

  useEffect(() => {
    setCorrectAnswer(
      availableAnswers[Math.floor(Math.random() * availableAnswers.length)]
    );
  }, []);

  return (
    <div className="container">
      <div className="top">
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
        <div
          className="blue-info "
          style={
            isLoser || isWin
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          <p id="end-info">palavra certa: {correctAnswer}</p>
          <button onClick={resetGame} className="reset">
            <ReplayIcon fontSize="large" />
          </button>
        </div>
      </div>

      <Game
        attempt={attempt}
        handleCheckAnswer={handleCheckAnswer}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
        isWin={isWin}
      />

      <div className="infos">
        <p>
          Este é um clone do site <a href="https://term.ooo/">termo.ooo</a>.
        </p>
        <p>Ainda não está completo.</p>
      </div>
    </div>
  );
}
