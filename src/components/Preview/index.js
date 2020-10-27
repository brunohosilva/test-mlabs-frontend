import React from 'react';
import Image from '../../lib/Images';
import './style.scss';

const TextPost = (props) => {
  const {Like, Comment, Save, PreviewImage, WhiteInstagram} = Image;

  function ImagePost() {
    if (props.image === '') {
      return <img src={PreviewImage} alt="Imagem do post" className="image" />;
    } else {
      return <img src={props.image} alt="Imagem do post" className="image" />;
    }
  }

  return (
    <div className="viewPost">
      <div className="profile">
        <div className="circle">
          <img className="socialLogo" src={WhiteInstagram} alt="Instagram" />
        </div>

        <span className="profileName">{props.name}</span>
      </div>
      <div className="imagemPost">{ImagePost()}</div>
      <div className="postDescription">
        <div className="options">
          <img src={Like} alt="Like" />
          <img src={Comment} alt="Comment" />
          <img src={Save} alt="Instagram" />
        </div>
        <div className="text">
          <span>{props.textPost ? props.textPost : 'Texto do post'}</span>
        </div>
      </div>
    </div>
  );
};

export default TextPost;
