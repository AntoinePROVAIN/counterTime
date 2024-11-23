import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authentification.css';

const Authentification = ({ setName }) => {
    const nav = useNavigate();
    const [username, setUsername] = useState("");

    const handleBackClick = () => {
        nav("/inscript");
    };

    const handleConnex = () => {
        if (!username) {
            console.error("Nom d'utilisateur vide !");
            return;
        }
        setName(username);
        console.log('handleConnex '+username);
        nav("/calendar");
    };
    

    return (
        <div className='tout'>
            <div className='container'>
                <h2 className='titre_a'>Authentification</h2>
                <div className='formu'>
                    <div className='connexion'>
                        {/* Champ texte contrôlé par l'état */}
                        <input 
                            type='text' 
                            className='inp' 
                            placeholder="Username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div className='connexion'>
                        <input 
                            type='password' 
                            className='inp' 
                            placeholder="Mot de passe" 
                        />
                    </div>
                    <div className='button'>
                        {/* Bouton déclenchant l'envoi des données */}
                        <input 
                            type='button' 
                            className='inp2' 
                            value="Connexion" 
                            onClick={handleConnex} 
                        />
                    </div>
                </div>
                <p className='inscript' onClick={handleBackClick}>Inscrivez-vous</p>
            </div>
        </div>
    );
};

export default Authentification;
