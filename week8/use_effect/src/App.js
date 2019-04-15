import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import axios from "axios";

import "./App.css";

const API_ROOT = "https://restcountries.eu/rest/v2/all";
const SEARCH_ROOT = "https://restcountries.eu/rest/v2/name/";

function App() {
  const [countries, updateCountries] = useState(null);
  const [query, updateQuery] = useState("");
  const [debounced] = useDebounce(query, 500);

  useEffect(() => {
    !query
      ? axios.get(API_ROOT).then(response => updateCountries(response.data))
      : axios
          .get(`${SEARCH_ROOT}${query}`)
          .then(response => updateCountries(response.data))
          .catch(err => updateCountries([]));
  }, [debounced]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries</h1>
        <input value={query} onChange={e => updateQuery(e.target.value)} />
        {!countries ? (
          <p>Loading countries ... </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Capital</th>
              </tr>
            </thead>
            <tbody>
              {countries.map(country => (
                <tr key={country.numericCode}>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;
