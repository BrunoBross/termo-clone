import React, { useEffect, useState } from "react";

interface LetterInputType {
  letter: string;
  nextLetter?: string;
  previousLetter?: string;
  register: Function;
  setFocus: Function;
  getValues: Function;
  isAnswered: boolean;
  correctAnswer: string;
  wrongLetters: string[];
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
    wrongLetters,
  } = props;

  const [input, setInput] = useState("");
  const [className, setClassName] = useState("letterInput ");

  const handleSetFocus = (event: React.KeyboardEvent) => {
    // VALIDAR AS LETRAS ERRADAS
    if (
      !event.key.match("[A-Za-z]") ||
      wrongLetters.includes(event.key.toUpperCase())
    ) {
      event.preventDefault();
      return;
    }

    // NAO DEIXAR APERTAR TAB
    if (event.key === "Tab") {
      event.preventDefault();
      return;
    }

    // MOVIMENTAR ENTRE OS CAMPOS COM AS SETAS DO TECLADO
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setFocus(previousLetter);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setFocus(nextLetter);
    }

    // VOLTAR UMA LETRA CASO NAO TENHA NENHUMA LETRA NO INPUT
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
    if (!isAnswered) {
      return;
    } else if (
      correctAnswer.charAt(getNumberIndexByType(letter)) === input.toUpperCase()
    ) {
      setClassName(className.concat("correct "));
    } else if (correctAnswer.includes(input.toUpperCase())) {
      setClassName(className.concat("contain "));
    } else {
      setClassName(className.concat("incorrect "));
    }
  }, [isAnswered, input]);

  return (
    <input
      type="text"
      {...register(letter)}
      minLength={1}
      maxLength={1}
      disabled={isAnswered}
      className={className}
      onKeyDown={handleSetFocus}
      onInput={handleInput}
      id={letter}
      autoComplete="off"
    />
  );
}
