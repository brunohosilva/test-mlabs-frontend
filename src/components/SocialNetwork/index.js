import React from 'react';
import Image from '../../lib/Images';
import './style.scss';

const SocialNetwork = () => {
  const {Instagram, Facebook, Pinterest, Twitter, Youtube, Linkedin} = Image;
  // TODO: logic --> put a checkbox to know if is true or false and get each type
  return (
    <div className="socialNetwork">
      <div className="socialTitleBox">
        <span className="title">Redes sociais</span>
      </div>
      <div className="socialList">
        <div className="circleLogo">
          <img className="socialLogo" src={Instagram} alt="Instagram" />
        </div>
        <div className="circleLogo">
          <img className="socialLogo" src={Facebook} alt="Facebook" />
        </div>
        <div className="circleLogo">
          <img className="socialLogo" src={Pinterest} alt="Pinterest" />
        </div>
        <div className="circleLogo">
          <img className="socialLogo" src={Twitter} alt="Twitter" />
        </div>
        <div className="circleLogo">
          <img className="socialLogo" src={Youtube} alt="Youtube" />
        </div>
        <div className="circleLogo">
          <img className="socialLogo" src={Linkedin} alt="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default SocialNetwork;
