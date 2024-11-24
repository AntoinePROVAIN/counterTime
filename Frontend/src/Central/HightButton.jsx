import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css";

const HightButton = () => {
  
  return (
    <>
        <div className='h_butt'>
            <div className='b_haut'>
                <a href='#entete-section' className='a_haut'><img src='/chvron_h.png' className='img_b'></img></a>
                <p className='txt_b'>Haut</p>
            </div>
            <div className='b_bas'>
                <a href='#result-section' className='a_bas'><img src='/chvron_b.png' className='img_b'></img></a>
                <p className='txt_b'>Bas</p>
            </div>
        </div>
    </>
  );
}

export default HightButton;
