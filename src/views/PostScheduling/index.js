import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Image from '../../lib/Images';
import './style.scss';

const PostScheduling = () => {
  const {Post} = Image;

  return (
    <div className="container">
      <Header />
      <div>tela de post</div>
      <Footer />
    </div>
  );
};

export default PostScheduling;
