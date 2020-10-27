import React from 'react';
import Image from '../../lib/Images';
import './style.scss';

const TextPost = (props) => {
  const {
    Like,
    Comment,
    Save,
    PreviewImage,
    WhiteInstagram,
    WhiteLinkedin,
    CommentLinkedin,
    ShareLinkedin,
    LikeLinkedin,
  } = Image;
  const {social} = props;

  function ImagePost() {
    if (props.image === '') {
      return <img src={PreviewImage} alt="Imagem do post" className="image" />;
    } else {
      return <img src={props.image} alt="Imagem do post" className="image" />;
    }
  }

  function TypeSocial() {
    if (social === 'Instagram') {
      return (
        <div className="viewPost">
          <div className="profile">
            <div className="circleInsta">
              <img
                className="socialLogo"
                src={WhiteInstagram}
                alt="Instagram"
              />
            </div>

            <span className="profileName">{props.name}</span>
          </div>
          <div className="imagemPost">{ImagePost()}</div>
          <div className="postDescription">
            <div className="options">
              <div className="likeComment">
                <img src={Like} alt="Like" />
                <img src={Comment} alt="Comment" />
              </div>
              <div className="save">
                <img src={Save} alt="Instagram" />
              </div>
            </div>
            <div className="text">
              <span>{props.textPost ? props.textPost : 'Texto do post'}</span>
            </div>
          </div>
        </div>
      );
    } else if (social === 'Linkedin') {
      return (
        <div className="viewPost">
          <div className="profile">
            <div className="circleLinke">
              <img className="socialLogo" src={WhiteLinkedin} alt="Instagram" />
            </div>
            <div className="nameDate">
              <span className="profileName">{props.name}</span>
              <span className="datepost"> 6 de setembro</span>
            </div>
          </div>
          <div className="textLinkedin">
            <span className="postTextLikedin">
              {props.textPost ? props.textPost : 'Texto do post'}
            </span>
          </div>
          <div className="imagemPost">{ImagePost()}</div>
          <div className="postDescription">
            <div className="text">
              <span>5 comentários</span>
            </div>
            <div className="optionsLinkedin">
              <img src={LikeLinkedin} alt="Like" />
              <img src={CommentLinkedin} className="comment" alt="Comment" />
              <img src={ShareLinkedin} className="share" alt="Instagram" />
            </div>
          </div>
        </div>
      );
    } else {
      return <img src={PreviewImage} alt="Imagem do post" className="image" />;
    }
  }

  return <div>{TypeSocial()}</div>;
};

export default TextPost;
