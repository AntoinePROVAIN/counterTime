import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Authentification.css';

const DetailsButton = ({ pseudo }) => {

  const nav = useNavigate();

  const handleDetails = () => {
    nav("/details"); 
  };

  return (
    
    <div className='global_d'>
      <p>{pseudo}</p>
      <img src='/account.png' className='img_d' onClick={handleDetails}></img>
    </div>

  );
};

export default DetailsButton;
