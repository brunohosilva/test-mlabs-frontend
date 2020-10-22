import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

const PostScheduling = () => {
  return (
    <div className="container">
      <Header />
      <div class="row">
        <div class="col-6 col-s-12">
          <div class="row">
            <div class="col-6 col-s-9">rede social</div>
            <div class="col-6 col-s-12">data de publicação</div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">Texto do post</div>
          </div>
          <div class="row">
            <div class="col-12 col-s-12">Upload de imagem</div>
          </div>
        </div>
        <div class="col-6 col-s-12">Visualozação de post</div>
      </div>

      <Footer />
    </div>
  );
};

export default PostScheduling;
