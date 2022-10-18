import React, { useEffect, useState } from "react";
import { WordInputForm } from "./WordForm";

interface LetterInputType {
  letter: string;
  nextLetter?: string;
  previousLetter?: string;
  register: Function;
  setFocus: Function;
  getValues: Function;
  isAnswered: boolean;
  correctAnswer: string;
}

export default function LetterInput(props: LetterInputType) {
  const {
    letter,
    register,
    nextLetter,
    previousLetter,
    setFocus,
    getValues,
    isAnswered,
    correctAnswer,
  } = props;

  const [input, setInput] = useState("");
  const [style, setStyle] = useState({});

  const handleSetFocus = (event: React.KeyboardEvent) => {
    if (!event.key.match("[A-Za-z]")) {
      event.preventDefault();
      return;
    }

    if (
      event.key === "Tab" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      event.preventDefault();
      return;
    }

    if (event.key === "Backspace" && !getValues(letter)) {
      setFocus(previousLetter);
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    event.target.value && setFocus(nextLetter);
  };

  const getNumberIndexByType = (letter: string) => {
    if (letter === "letterOne") {
      return 0;
    } else if (letter === "letterTwo") {
      return 1;
    } else if (letter === "letterThree") {
      return 2;
    } else if (letter === "letterFour") {
      return 3;
    } else if (letter === "letterFive") {
      return 4;
    } else {
      return 5;
    }
  };

  useEffect(() => {
    if (
      correctAnswer.charAt(getNumberIndexByType(letter)) === input.toUpperCase()
    ) {
      setStyle({
        backgroundColor: "#3AA394",
        border: "0.125em solid #3AA394",
      });
    } else if (correctAnswer.includes(input)) {
      setStyle({
        backgroundColor: "#D3AD69",
        border: "0.125em solid #D3AD69",
      });
    } else {
      setStyle({
        backgroundColor: "#312A2C",
        border: "0.125em solid #312A2C",
      });
    }
  }, [handleInput]);

  return (
    <>
      <input
        type="text"
        {...register(letter)}
        minLength={1}
        maxLength={1}
        disabled={isAnswered}
        className="letterInput"
        onKeyDown={handleSetFocus}
        onInput={handleInput}
        id={letter}
        style={
          isAnswered
            ? style
            : {
                backgroundColor: "transparent",
                border: "0.125em solid #4C4347",
              }
        }
        autoComplete="off"
      />
    </>
  );
}
