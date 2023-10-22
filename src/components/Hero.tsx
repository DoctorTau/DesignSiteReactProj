import React from 'react';
import './styles/hero-style.css';

interface HeroProps {
    title: string;
    buttonText: string;
    text: string;
    smallImage: string;
    bigImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, buttonText, text, smallImage, bigImage }) => {
    return (
        <div className="hero">
            <h1 className="hero-title">{title}</h1>
            <div className="hero-button-div">
                <a className="hero-button" href="#">{buttonText}</a>
            </div>
            <p className="hero-text">{text}</p>

            <div className="hero-image-div-small">
                <img
                    className="hero-image-small"
                    src={smallImage}
                    alt="hero-image-1"
                />
            </div>
            <div className="hero-image-div-big">
                <img
                    className="hero-image-big"
                    src={bigImage}
                    alt="hero-image-2"
                />
            </div>
        </div>
    );
}

export default Hero;