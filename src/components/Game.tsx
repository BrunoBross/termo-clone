import WordBlockedInput from "./WordBlockedInput";
import WordForm from "./WordForm";

interface GameInterface {
  attempt: number;
  handleCheckAnswer: Function;
  correctAnswer: string;
  wrongLetters: string[];
}

export default function Game(props: GameInterface) {
  const { attempt, handleCheckAnswer, correctAnswer, wrongLetters } = props;

  return (
    <div className="game">
      {attempt >= 1 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 1}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 2 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 2}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 3 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 3}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 4 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 4}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 5 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 5}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
      {attempt >= 6 ? (
        <WordForm
          handleCheckAnswer={handleCheckAnswer}
          isAnswered={attempt > 6}
          correctAnswer={correctAnswer}
          wrongLetters={wrongLetters}
        />
      ) : (
        <WordBlockedInput />
      )}
    </div>
  );
}
