import React from 'react';
import './style.scss';

const Button = (props) => {
  return (
    <a
      href="/post-scheduling"
      className="Button"
      style={{backgroundColor: props.color}}>
      <span className="label-button">{props.text}</span>
    </a>
  );
};

export default Button;
