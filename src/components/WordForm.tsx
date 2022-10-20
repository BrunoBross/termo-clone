import { useEffect } from "react";
import { useForm } from "react-hook-form";
import WordInput from "./WordInput";

interface WordForm {
  handleCheckAnswer: Function;
  isAnswered: boolean;
  correctAnswer: string;
  wrongLetters: string[];
}

export interface WordInputForm {
  letterOne: string;
  letterTwo: string;
  letterThree: string;
  letterFour: string;
  letterFive: string;
  letterSix: string;
}

export default function WordForm(props: WordForm) {
  const { handleCheckAnswer, isAnswered, correctAnswer, wrongLetters } = props;

  const { register, handleSubmit, setFocus, getValues } =
    useForm<WordInputForm>();

  const onSubmitForm = (data: WordInputForm) => {
    const answer =
      data.letterOne +
      data.letterTwo +
      data.letterThree +
      data.letterFour +
      data.letterFive +
      data.letterSix;

    answer.length === 6 && handleCheckAnswer(answer);
  };

  useEffect(() => {
    setFocus("letterOne");
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="wordForm">
      <WordInput
        register={register}
        setFocus={setFocus}
        getValues={getValues}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
      />

      <button
        type="submit"
        style={{ backgroundColor: "transparent", border: 0 }}
      ></button>
    </form>
  );
}
