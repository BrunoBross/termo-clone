import LetterInput from "./LetterInput";

interface WordInputType {
  register: Function;
  setFocus: Function;
  getValues: Function;
  isAnswered: boolean;
  correctAnswer: string;
  wrongLetters: string[];
}

export default function WordInput(props: WordInputType) {
  const {
    register,
    setFocus,
    getValues,
    isAnswered,
    correctAnswer,
    wrongLetters,
  } = props;

  return (
    <>
      <LetterInput
        letter="letterOne"
        nextLetter="letterTwo"
        register={register}
        setFocus={setFocus}
        getValues={getValues}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
      />
      <LetterInput
        letter="letterTwo"
        nextLetter="letterThree"
        previousLetter="letterOne"
        register={register}
        setFocus={setFocus}
        getValues={getValues}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
      />
      <LetterInput
        letter="letterThree"
        nextLetter="letterFour"
        previousLetter="letterTwo"
        register={register}
        setFocus={setFocus}
        getValues={getValues}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
      />
      <LetterInput
        letter="letterFour"
        nextLetter="letterFive"
        previousLetter="letterThree"
        register={register}
        setFocus={setFocus}
        getValues={getValues}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
      />
      <LetterInput
        letter="letterFive"
        nextLetter="letterSix"
        previousLetter="letterFour"
        register={register}
        setFocus={setFocus}
        getValues={getValues}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
      />
      <LetterInput
        letter="letterSix"
        previousLetter="letterFive"
        register={register}
        setFocus={setFocus}
        getValues={getValues}
        isAnswered={isAnswered}
        correctAnswer={correctAnswer}
        wrongLetters={wrongLetters}
      />
    </>
  );
}
