import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../App.css";

const BottomButton = () => {
  
  return (
    <>
      <div className='b_butt'>
            {/* <input type='button' value="Bas de page"></input> */}
            <a href='#result-section'>Bas de page</a>
        </div>
    </>
  );
}

export default BottomButton;
