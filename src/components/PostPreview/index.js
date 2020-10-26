import React from 'react';
import {ModalPreview} from '../../lib/Modal';
import Image from '../../lib/Images';
import SocialPreview from '../Preview';
import './style.scss';

const PostPreview = (props) => {
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
            image={props.image}
            textPost={props.text}
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
      <div className="mobilePreview">
        <ModalPreview
          name="Bruno Oliveira"
          image={props.image}
          textPost={props.text}
        />
      </div>
    </div>
  );
};

export default PostPreview;
