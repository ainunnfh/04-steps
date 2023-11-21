import { useState } from "react";
import Count from "./Count";

const messages = [
  "Learn useState in React ⚛️",
  "Apply for jobs 💼",
  "Invest my new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  const disabledStepsPrev = step <= 1 ? "#d9d9d9d9" : "#ffafcc";
  const disabledStepsNext = step >= 3 ? "#d9d9d9d9" : "#ffafcc";

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step} : {messages[step - 1]}
        </p>
        <div className="buttons">
          <button
            style={{
              backgroundColor: `${disabledStepsPrev}`,
              color: "white",
            }}
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: `${disabledStepsNext}`, color: "white" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
      <Count />
    </>
  );
}
