import WordBlockedInput from "./WordBlockedInput";
import WordForm from "./WordForm";

interface GameInterface {
  attempt: number;
  handleCheckAnswer: Function;
  correctAnswer: string;
  wrongLetters: string[];
  isWin: boolean;
}

export default function Game(props: GameInterface) {
  const { attempt, handleCheckAnswer, correctAnswer, wrongLetters, isWin } =
    props;

  return (
    <div className="game">
      {attempt >= 1 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 1 || isWin}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 2 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 2 || isWin}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 3 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 3 || isWin}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 4 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 4 || isWin}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 5 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 5 || isWin}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 6 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 6 || isWin}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
    </div>
  );
}
