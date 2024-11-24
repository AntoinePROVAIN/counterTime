import React, { useState } from 'react';
import "../App.css";

const annee = [];

// Remplir le tableau des années de 1950 à 2099
for (let i = 0; i < 150; i++) {
  annee[i] = 1950 + i;
}

const Year = ({ onYearSelect }) => {
  const [selectedYear, setSelectedYear] = useState("2024"); // État pour l'année sélectionnée

  const handleChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year); // Mettre à jour l'état de l'année sélectionnée
    onYearSelect(year); // Passer la valeur sélectionnée au parent via la fonction onYearSelect
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">{selectedYear || "Choisissez une année"}</button>
      <div className="dropdown-content">
        <select onChange={handleChange} value={selectedYear}>
          <option value="" disabled>Choisissez une année</option>
          {annee.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>

  );
};

export default Year;
