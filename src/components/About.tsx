import React from 'react';
import './styles/about-style.css';

interface AboutProps {
    title: string;
    paragraphs: string[];
    subtextItems: { subtitle: string; text: string }[];
}

const About: React.FC<AboutProps> = ({ title, paragraphs, subtextItems }) => {
    return (
        <div className="about">
            <div className="about-title">
                <h2>{title}</h2>
            </div>
            <div className="about-text">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="about-subtext">
                {subtextItems.map((item, index) => (
                    <div className="about-subtext-item" key={index}>
                        <div className="about-subtitle">{item.subtitle}</div>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;