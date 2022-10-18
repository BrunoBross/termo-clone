export default function WordBlockedInput() {
  return (
    <form className="wordBlockedForm">
      <input type="text" className="letterBlockedInput" disabled />
      <input type="text" className="letterBlockedInput" disabled />
      <input type="text" className="letterBlockedInput" disabled />
      <input type="text" className="letterBlockedInput" disabled />
      <input type="text" className="letterBlockedInput" disabled />
      <input type="text" className="letterBlockedInput" disabled />
      <button style={{ backgroundColor: "transparent", border: 0 }}></button>
    </form>
  );
}
