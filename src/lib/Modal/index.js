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

export const ModalPreview = (props): void => {
  const [isOpen, setIsOpen] = useState(false);
  const {Instagram, Like, Comment, Save, PreviewImage} = Image;

  function ImagePost() {
    if (props.image === '') {
      return <img src={PreviewImage} alt="Imagem do post" className="image" />;
    } else {
      return <img src={props.image} alt="Imagem do post" className="image" />;
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
      {props.type === 'SchedulesPreview' ? (
        <div onClick={() => Open()} className="ButtonPreviewPost">
          <span className="labelPreview">Preview</span>
        </div>
      ) : (
        <div onClick={() => Open()} className="ButtonPreviewPost">
          <span className="label">Visualizar post</span>
        </div>
      )}
      <Modal show={isOpen} onHide={() => Close()}>
        <Modal.Header>
          <Modal.Title>Visualização do post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="center">
          <div className="viewPost">
            <div className="profile">
              <img className="socialLogo" src={Instagram} alt="Instagram" />
              <span>{props.name}</span>
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
        </Modal.Body>
      </Modal>
    </div>
  );
};
