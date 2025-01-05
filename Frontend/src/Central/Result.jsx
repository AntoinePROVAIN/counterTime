import React from 'react';
import Ligne from '../ToolBox/Ligne';
import "../App.css";

const splitage = (temps) => {
    temps = (temps/60).toFixed(2);
    let [h, m] = temps.split(".");
    m = m*0.6;
    return h+" h "+Math.round(m)+" min";
}

const Result = ({ sommeY, sommeM, year }) => {

    console.log(sommeY)
    console.log(Math.round(splitage(sommeY)))
    return (
        // <div className='somme'>
        <div id="result-section" className='somme'>
            <div className='tot'>
                <h3 className='tot1'>Somme heures {year}</h3>
                <h3 className='tot1'>{sommeY ? splitage(sommeY) : "0 h 0"}</h3>
            </div>
            <Ligne className="ligne"/>
            <div className='tot_mois'>
                {Object.entries(sommeM).map(([mois, sum]) => (
                    <div className='mois tot' key={mois}>
                        <h3>{mois.charAt(0).toUpperCase() + mois.slice(1)}</h3>
                        <h3>{sum ? splitage(sum) : "0 h 0"}</h3>
                    </div>
                ))}
                <ul>
                    
                </ul>
            </div>
        
        </div>
    );
};

export default Result;
