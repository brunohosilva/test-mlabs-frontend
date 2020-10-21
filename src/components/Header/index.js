import React from 'react';
import Image from '../../lib/Images';
import './style.scss';

const Header = () => {
  const {Logo, Profile, Menu} = Image;

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" className="mlabs-logo" />
        <img src={Menu} alt="Logo" className="mlabs-menu" />
      </div>
      <div className="profile">
        <img src={Profile} alt="Profile" className="profile-logo" />
        <span className="profile-name">Bruno Oliveira</span>
      </div>
    </div>
  );
};

export default Header;
