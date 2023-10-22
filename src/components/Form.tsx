import React from 'react';
import './styles/form-style.css';

interface FormProps {
    title: string;
    description: string;
    formImage: string;
    appstoreImage: string;
    playstoreImage: string;
}

const Form: React.FC<FormProps> = ({ title, description, formImage, appstoreImage, playstoreImage }) => {
    return (
        <div className="form">
            <div className="form-image">
                <img src={formImage} alt="form-image" />
            </div>

            <div className="form-text">
                <h2>{title}</h2>
                <p>{description}</p>

                <input
                    className="form-input"
                    placeholder="Имя"
                    type="text"
                />
                <input
                    className="form-input"
                    placeholder="E-mail"
                    type="text"
                />
                <input
                    className="form-input"
                    placeholder="Телефон"
                    type="text"
                />

                <button className="form-button" type="submit">Отправить заявку</button>

                <div className="form-app-buttons">
                    <div className="form-app-button">
                        <img src={appstoreImage} alt="appstore" />
                    </div>
                    <div className="form-app-button">
                        <img src={playstoreImage} alt="playstore" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;