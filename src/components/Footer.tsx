import React from 'react';
import './styles/footer-style.css';

const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="rules-text">
                <p>© 2023 Aveji</p>
                <p>Все права защищены</p>
            </div>

            <p>Политика конфеденциальности / Оплата и доставка</p>

            <div className="socials">
                <p>Вконтакте</p>
                <p>Телеграм</p>
            </div>
        </div>
    );
}

export default Footer;