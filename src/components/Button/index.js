import React from 'react';
import './style.scss';

const Button = (props) => {
  function Label() {
    if (props.isLink) {
      return (
        <a href="/post-scheduling" className="Link">
          <span className="label-button" style={{color: props.textColor}}>
            {props.text}
          </span>
        </a>
      );
    } else {
      return (
        <span className="label-button" style={{color: props.textColor}}>
          {props.text}
        </span>
      );
    }
  }

  return (
    <div
      className="Button"
      style={{
        backgroundColor: props.color,
        borderColor: props.borderColor,
      }}>
      {Label()}
    </div>
  );
};

export default Button;
