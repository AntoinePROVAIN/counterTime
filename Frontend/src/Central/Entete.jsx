import React from 'react';
import "../App.css";
import { useState, useEffect } from 'react';

import DetailsButton from '../Authentification/DetailsButton';

const Entete = ({nom}) => {

  if(nom == "") {
    nom = "Connexion";
  }

  return (
    <div id="entete-section" className='global_e'>
      <div className='entete'>
        <div className='img'>
            <img src='/logo.png' alt="logo" className='img_e'/>
        </div>
        <h1>Horaire annuel</h1>
      </div>
      <DetailsButton pseudo={nom}/>
    </div>
  );
};

export default Entete;
