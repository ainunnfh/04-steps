const messages = [
  "Learn useState in React ⚛️",
  "Apply for jobs 💼",
  "Invest my new income 🤑",
];

export default function App() {
  const step = 1;

  function handlePrev() {
    alert("Previous");
  }

  function handleNext() {
    alert("Next");
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#ffafcc", color: "white" }}
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#ffafcc", color: "white" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
