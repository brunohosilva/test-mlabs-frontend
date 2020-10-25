import React, {useState} from 'react';
import Button from '../../components/Button';
import Image from '../../lib/Images';
import './style.css';

import {Modal} from 'rsuite';

export const NotifySuccessScheduling = (props): void => {
  const [isOpen, setIsOpen] = useState(false);
  const {Success} = Image;

  function ValidationButton() {
    const logic =
      props.data[0].date === '' ||
      props.data[0].hour === '' ||
      props.data[0].social === '' ||
      props.data[0].text === ''
        ? false
        : true;

    if (logic) {
      return (
        <div onClick={() => Open()}>
          <Button
            text="Agendar"
            color="#2F80ED"
            textColor="#FFFFFF"
            borderColor="#2F80ED"
          />
        </div>
      );
    } else {
      return (
        <Button
          text="Agendar"
          color="#e5e5e5"
          textColor="#000000"
          borderColor="#8c8c8c"
        />
      );
    }
  }

  function Close() {
    setIsOpen(false);
  }

  function Open() {
    setIsOpen(true);
  }

  return (
    <div className="modal-container">
      {ValidationButton()}
      <Modal show={isOpen} onHide={() => Close()}>
        <Modal.Body className="center">
          <img src={Success} alt="Logo" className="mlabs-logo" />
          <p className="phrase">Agendado com sucesso!</p>
        </Modal.Body>
        <Modal.Footer className="center">
          <Button
            text="Ok"
            color="#2F80ED"
            textColor="#FFFFFF"
            borderColor="#2F80ED"
            isLink={true}
            link={'/schedules'}
          />
        </Modal.Footer>
      </Modal>
    </div>
  );
};
