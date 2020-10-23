import React from 'react';
import Image from '../../lib/Images';
import SocialPreview from '../Preview';
import './style.scss';

const PostPreview = () => {
  const {PreviewImage} = Image;

  function Preview(params) {
    if (false) {
      return (
        <div className="previewBox">
          <p className="phrasePreview">
            Aguardando conteúdo. Informe os canais e as mídias desejadas para
            vizualização
          </p>
          <img src={PreviewImage} alt="PreviewImage" />
        </div>
      );
    } else {
      return (
        <div className="previewBox">
          <SocialPreview
            name="Bruno Oliveira"
            image="imagem"
            textPost="texto do post"
          />
        </div>
      );
    }
  }

  return (
    <div className="previewContainer">
      <div className="preview">
        <div className="previewTitleBox">
          <span className="title">vizualização do post</span>
        </div>
        {Preview()}
      </div>
      <div className="mobilePreview" onClick={() => console.log('click')}>
        <div className="ButtonPreviewPost">
          <span className="label">Visualizar post</span>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
