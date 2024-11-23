import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

const Calendar = ({ getHeuresDuMois }) => {
  const joursParMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const nomMois = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];
  
  const navigate = useNavigate();

  const handleDayClick = (jour, mois) => {
    navigate(`/form/${mois}/${jour}`);
  };
  
  return (
    <div className="calendar-container">
      {joursParMois.map((joursDansMois, moisIndex) => {
        const heuresDuMois = getHeuresDuMois(nomMois[moisIndex]);
        // console.log(heuresDuMois)
        return (
          <div key={moisIndex} className="month">
            <h2>{nomMois[moisIndex]}</h2>
            <div className="days-grid">
              {Array.from({ length: joursDansMois }, (_, i) => {
                const heure = heuresDuMois[i];
                const isSet = heure !== "00:00";

                return (
                  <div 
                    key={i} 
                    className={`day-box ${isSet ? "day-set" : ""}`}
                    onClick={() => handleDayClick(i + 1, nomMois[moisIndex])}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
