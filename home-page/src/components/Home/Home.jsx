import React, { useState, useEffect } from 'react';

import { PHRASES } from '../../utils/data';
import './Home.css'

const Home = () => {

    const [currentPhrase, setCurrentPhrase] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPhrase(prevIndex => (prevIndex + 1) % PHRASES.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id='home' className="home-wrapper">
            <div className="flexCenter innerWidth paddings home-container">
                
                { /* Lado esquerdo */}
                <div className="home-left flexColCenter">
                    <p className="secondaryText">Olá, meu nome é</p>
                    <p className="primaryText">Daniel Silva</p>
                    <p className='secondaryText '>Bacharel em <span className='orangeText'>Sistema de Informação (UFMG)</span></p>

                    <div>
                        <p className="paddings normalText">{PHRASES[currentPhrase]}</p>
                    </div>

                    <button className='button'>
                    
                    <a href="https://drive.google.com/file/d/1rPBOEMGV50OyP5HQiiE-K_M-zKyNqyoa/view?usp=sharing" target="_blank" rel="noreferrer">Download do arquivo</a>

                    </button>
                </div>

                {/* Lado Direito */}
                <div className="flexEnd home-right innerWidth">
                    <div className="image-container">
                        <img src="./assets/images/fotomy.jpeg" alt="" className="img-right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home