import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css";

const Form = ({ updateHeure, getHeure }) => {
  const nav = useNavigate();
  const { mois, jour } = useParams(); // Récupère le mois et le jour
  const [heure, setHeure] = useState("00:00"); // Valeur initiale par défaut

  // Utilise `getHeure` pour définir l'heure enregistrée pour le jour et le mois
  useEffect(() => {
    if (mois && jour) {
      const heureEnregistree = getHeure(mois, parseInt(jour, 10));
      setHeure(heureEnregistree); // Définit l'heure initiale
    }
  }, [mois, jour, getHeure]);

  const handleBackClick = () => {
    nav("/calendar"); 
  };

  const handleValidate = () => {
    if (mois && jour) {
      updateHeure(mois, parseInt(jour, 10), heure);
      nav("/calendar"); 
    }
  };

  const handleDelete = () => {
    if (mois && jour) {
      setHeure("00:00");
      updateHeure(mois, parseInt(jour, 10), "00:00");
      nav("/calendar");
    }
  };

  return (
    <>
      <div className='heures'>
        <div className='form'>
          <div>
            <label htmlFor="appt" className='lab'>{jour} {mois}</label>
          </div>
          <div>
            <input type="time" id="appt" className='inpp' name="appt" min="09:00" max="18:00" required value={heure} onChange={(e) => setHeure(e.target.value)}/>
          </div>
          <div className='valid'>
            <img src='/valid.png' className='delete_f' alt="valider" onClick={handleValidate} />
            <img src='/delete.png' className='delete_f' alt="supprimer" onClick={handleDelete} />
          </div>
        </div>
      </div>

      <input type='button' value="Retour" className='retour' onClick={handleBackClick} />
    </>
  );
}

export default Form;
