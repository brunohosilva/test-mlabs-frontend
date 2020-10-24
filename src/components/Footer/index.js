import React from 'react';
import Button from '../../components/Button';

import './style.scss';

const Footer = (props) => {
  // function to cancel Schedule
  function Cancel() {
    console.log('cancelar');
  }

  // function to Save Draft
  function SaveDraft() {
    console.log('salvar rascunho');
  }

  // function to Schedule
  function Schedule() {
    localStorage.setItem('data', JSON.stringify(props.data));
  }

  return (
    <div className="footer">
      <div className="buttonsContainer">
        <div className="button" onClick={Cancel}>
          <Button
            text="Cancelar"
            color="#FFFFFF"
            textColor="#2F80ED"
            borderColor="transparent"
            isLink={false}
          />
        </div>
        <div className="button" onClick={SaveDraft}>
          <Button
            text="Salvar rascunho"
            color="#FFFFFF"
            textColor="#2F80ED"
            borderColor="#2F80ED"
            isLink={false}
          />
        </div>
        <div className="button" onClick={Schedule}>
          <Button
            text="Agendar"
            color="#2F80ED"
            textColor="#FFFFFF"
            borderColor="#2F80ED"
            isLink={true}
            link={'/schedules'}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
