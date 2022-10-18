export default function WordBlockedInput() {
  return (
    <form className="wordBlockedForm">
      <input type="text" className="letterBlockedInput" />
      <input type="text" className="letterBlockedInput" />
      <input type="text" className="letterBlockedInput" />
      <input type="text" className="letterBlockedInput" />
      <input type="text" className="letterBlockedInput" />
      <input type="text" className="letterBlockedInput" />
      <button style={{ backgroundColor: "transparent", border: 0 }}></button>
    </form>
  );
}
