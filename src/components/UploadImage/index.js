import React, {useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';

import Button from '../../components/Button';
import Image from '../../lib/Images';
import './style.scss';

const UploadImage = () => {
  const [files, setFiles] = useState([]);

  const {Upload} = Image;

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        setFiles(binaryStr);
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  return (
    <div className="upload">
      <div className="uploadTitleBox">
        <span className="title">Upload de imagem</span>
      </div>
      <div {...getRootProps()} className="uploadContainer">
        <div className="uploadBox">
          <img src={Upload} alt="Upload" />
          <p className="phraseUpload">
            Arraste e solte uma imagem aqui ou clique no botão abaixo
          </p>
          <input {...getInputProps()} />
          <Button
            text="Pesquisar imagens"
            color="#FFFFFF"
            textColor="#2F80ED"
            borderColor="#2F80ED"
            isLink={false}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
