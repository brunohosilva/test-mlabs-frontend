import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SocialNetwork from '../../components/SocialNetwork';
import Calendar from '../../components/Calendar';
import './style.css';

const PostScheduling = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-6 col-s-12">
          <div className="row">
            <div className="col-6 col-s-9">
              <SocialNetwork />
            </div>
            <div className="col-6 col-s-12">
              <Calendar />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-s-12">Texto do post</div>
          </div>
          <div className="row">
            <div className="col-12 col-s-12">Upload de imagem</div>
          </div>
        </div>
        <div className="col-6 col-s-12">Visualozação de post</div>
      </div>

      <Footer />
    </div>
  );
};

export default PostScheduling;
