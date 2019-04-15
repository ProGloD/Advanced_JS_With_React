import React, { useState } from "react";

import "./App.css";

function App() {
  const [animal, updateAnimal] = useState(null);
  const animals = ["Hundar", "Katter", "Hästar", "Fiskar"];

  return (
    <div className="App">
      <form>
        {animals.map(animal => (
          <React.Fragment key={animal}>
            <input
              type="radio"
              name="animal"
              onChange={() => updateAnimal(animal)}
            />
            <label>{animal}</label>
          </React.Fragment>
        ))}
      </form>

      <p>Jag älskar {!animal ? "..." : animal}</p>
    </div>
  );
}

export default App;
