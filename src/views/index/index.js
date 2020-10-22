import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Image from '../../lib/Images';
import './style.scss';

const Index = () => {
  const {Post} = Image;

  return (
    <div className="container">
      <Header />
      <div className="imageContainer">
        <img src={Post} alt="Logo" className="post-img" />
      </div>
      <div className="buttonContainer">
        <Button text="Agendar post" color="#F2994A" />
      </div>
    </div>
  );
};

export default Index;
