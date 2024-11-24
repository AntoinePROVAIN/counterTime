import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu/Menu'; 
import Entete from './Central/Entete'; 
import Form from './Central/Form'; 
import Calendar from './Central/Calendar'; 
import Year from './Central/Year'; 
import Ligne from './ToolBox/Ligne'; 
import Result from './Central/Result'; 
import Authentification from './Authentification/Authentification';
import Inscrip from './Authentification/inscript'; 
import { calculateSum, calculateYearlySum } from './ToolBox/CalculSum';
import Info from './Authentification/Info';

const App = () => {

  const createInitialMonthState = (days) => {
    return Array.from({ length: days }, () => "00:00");
  };

  const [selectedYear, setSelectedYear] = useState("2024"); // État pour l'année sélectionnée
  const [name, setN] = useState(""); // État pour l'année sélectionnée

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    // console.log("Année sélectionnée : ", year); // Affiche l'année sélectionnée dans la console
  };

  const handleConnex = (name) => {
    setN(name);
    // console.log("Nom : ", name);
  };
  

  const [janvier, setJanvier] = useState(createInitialMonthState(31));
  const [fevrier, setFevrier] = useState(createInitialMonthState(28));
  const [mars, setMars] = useState(createInitialMonthState(31));
  const [avril, setAvril] = useState(createInitialMonthState(30));
  const [mai, setMai] = useState(createInitialMonthState(31));
  const [juin, setJuin] = useState(createInitialMonthState(30));
  const [juillet, setJuillet] = useState(createInitialMonthState(31));
  const [aout, setAout] = useState(createInitialMonthState(31));
  const [septembre, setSeptembre] = useState(createInitialMonthState(30));
  const [octobre, setOctobre] = useState(createInitialMonthState(31));
  const [novembre, setNovembre] = useState(createInitialMonthState(30));
  const [decembre, setDecembre] = useState(createInitialMonthState(31));

  const [monthlySums, setMonthlySums] = useState({});
  const [yearlySum, setYearlySum] = useState(0);

  const updateHeure = (mois, jour, heure) => {
    const setters = {
      janvier: setJanvier,
      fevrier: setFevrier,
      mars: setMars,
      avril: setAvril,
      mai: setMai,
      juin: setJuin,
      juillet: setJuillet,
      aout: setAout,
      septembre: setSeptembre,
      octobre: setOctobre,
      novembre: setNovembre,
      decembre: setDecembre,
    };
    
    const normalizedMois = normalizeMonth(mois);
    const moisSetter = setters[normalizedMois];
    
    if (moisSetter) {
      moisSetter((prev) => {
        const newMois = [...prev];
        newMois[jour - 1] = heure; // Met à jour l'heure pour le jour spécifié
        return newMois;
      });
    }
  };

  const normalizeMonth = (mois) => {
    return mois
      .toLowerCase()
      .normalize("NFD") // Supprime les accents
      .replace(/[\u0300-\u036f]/g, ""); // Enlève les accents restants
  };

  const getHeuresDuMois = (mois) => {
    const moisData = {
      janvier,
      fevrier,
      mars,
      avril,
      mai,
      juin,
      juillet,
      aout,
      septembre,
      octobre,
      novembre,
      decembre,
    };

    const normalizedMois = normalizeMonth(mois);
    
    return moisData[normalizedMois] || []; 
  };

  useEffect(() => {
    const months = { janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre };
    const newMonthlySums = Object.keys(months).reduce((sums, mois) => {
      sums[mois] = calculateSum(months[mois]);
      return sums;
    }, {});

    setMonthlySums(newMonthlySums);
    console.log(monthlySums);
    setYearlySum(calculateYearlySum(months));
    console.log(yearlySum);
  }, [janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre]);

  console.log("");
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Authentification setName={handleConnex}/>} />
        <Route path="/inscript" element={<Inscrip />} />
        {/* <Route path="/details" element={<Info />} /> */}
        <Route path="/calendar" element={<> <div className='global'><Entete nom={name}/> <div className='centre'><Year onYearSelect={handleYearSelect} /> <Calendar getHeuresDuMois={getHeuresDuMois} /> <Ligne className="ligne ligne1"/> <Result sommeY={yearlySum} sommeM={monthlySums} year={selectedYear}/> </div></div> </>} />
        <Route path="/form/:mois/:jour" element={<> <div className='global'><Entete /> <div className='centre'><Form updateHeure={updateHeure} getHeure={(mois, jour) => getHeuresDuMois(mois)[jour - 1]}/> </div></div></>} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
    
  );
};

export default App;
