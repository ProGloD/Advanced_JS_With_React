import React, { useState } from "react";
import "./App.css";

function BodyMassIndexCalculator() {
  const [height, updateHeight] = useState(0);
  const [weight, updateWeight] = useState(0);
  const [bmi, updateBMI] = useState(null);

  function convertToMeter(cm) {
    return cm / 100;
  }

  function calc(cm, kg) {
    const bmi = kg / convertToMeter(cm) ** 2;
    updateBMI(bmi.toFixed(2));
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>
          <input
            type="number"
            min={0}
            value={height}
            onChange={e => updateHeight(e.target.value)}
          />
          cm
        </label>
        <label>
          <input
            type="number"
            min={0}
            value={weight}
            onChange={e => updateWeight(e.target.value)}
          />
          kg
        </label>
        <button onClick={() => calc(height, weight)}>Calculate</button>

        {bmi ? (
          <p>
            Your BMI is {bmi}, it is{" "}
            {bmi < 18.5 ? (
              <strong>underweight</strong>
            ) : bmi < 25 ? (
              <strong>normal</strong>
            ) : (
              <strong>overweight</strong>
            )}
            .
          </p>
        ) : null}
      </header>
    </div>
  );
}

export default BodyMassIndexCalculator;
