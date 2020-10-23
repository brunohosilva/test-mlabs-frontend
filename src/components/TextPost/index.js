import React, {useState} from 'react';
import InputEmoji from 'react-input-emoji';
import Image from '../../lib/Images';
import './style.scss';

const TextPost = () => {
  const {} = Image;
  const [text, setText] = useState('');

  // TODO: logic --> put a checkbox to know if is true or false and get each type
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
