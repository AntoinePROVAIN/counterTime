import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css";

const HightButton = () => {
  
  return (
    <>
        <div className='h_butt'>
            <div className='b_haut'>
                <a href='#entete-section' className='a_haut'>Haut de page</a>
            </div>
            <div className='b_bas'>
                <a href='#result-section' className='a_bas'>Bas de page</a>
            </div>
        </div>
    </>
  );
}

export default HightButton;
