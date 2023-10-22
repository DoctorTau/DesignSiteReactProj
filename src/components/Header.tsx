import React from 'react';
import './styles/header-style.css';


interface MenuItem {
  title: string;
  href: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
  phoneNumber: string;
}

const Header: React.FC<HeaderProps> = ({ menuItems, phoneNumber }) => {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <img src="./assets/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="left-header">
        <div className="menu">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href}>{item.title}</a>
          ))}
        </div>
        <div className="number">{phoneNumber}</div>
      </div>
    </div>
  );
}
export default Header;
