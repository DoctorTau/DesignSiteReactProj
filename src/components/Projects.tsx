import React from 'react';
import './styles/projects-style.css';

interface ProjectProps {
    title: string;
    images: { src: string, alt: string }[];
}

const Projects: React.FC<ProjectProps> = ({ title, images }) => {
    return (
        <div className="project">
            <div className="project-title">
                <h2>{title}</h2>
            </div>

            <div className="projects-pictures">
                <div className="projects-picture-grid">
                    {images.map((image, index) => (
                        <div id={`pic${index + 1}`} className="projects-picture-item" key={index}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;