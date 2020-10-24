import React, {useState} from 'react';
import InputEmoji from 'react-input-emoji';
import './style.scss';

const TextPost = (props) => {
  const {SetTextPost = () => {}} = props;
  const [text, setText] = useState('');
  SetTextPost(text);

  return (
    <div className="textPost">
      <div className="textPostTitleBox">
        <span className="title">Texto do post</span>
      </div>
      <div className="textContainer">
        <InputEmoji
          value={text}
          onChange={setText}
          placeholder="Aqui vai o texto descritivo desse post"
        />
      </div>
    </div>
  );
};

export default TextPost;
