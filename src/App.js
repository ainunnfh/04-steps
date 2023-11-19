const messages = [
  "Learn useState in React ⚛️",
  "Apply for jobs 💼",
  "Invest my new income 🤑",
];

export default function App() {
  const step = 1;

  return (
    <div className="steps">
      {/* Learn React Part 6 Yeayy!!! */}
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: "#ffafcc", color: "white" }}>
          Previous
        </button>
        <button style={{ backgroundColor: "#ffafcc", color: "white" }}>
          Next
        </button>
      </div>
    </div>
  );
}
