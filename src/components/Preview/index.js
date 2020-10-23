import React from 'react';
import Image from '../../lib/Images';
import './style.scss';

const TextPost = (props) => {
  const {Instagram, Like, Comment, Save} = Image;
  return (
    <div className="viewPost">
      <div className="profile">
        <img className="socialLogo" src={Instagram} alt="Instagram" />
        <span>{props.name}</span>
      </div>
      <div className="imagemPost">
        <span>{props.image}</span>
      </div>
      <div className="postDescription">
        <div className="options">
          <img src={Like} alt="Like" />
          <img src={Comment} alt="Comment" />
          <img src={Save} alt="Instagram" />
        </div>
        <div className="text">
          <span>{props.textPost}</span>
        </div>
      </div>
    </div>
  );
};

export default TextPost;
