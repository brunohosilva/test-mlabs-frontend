import React, {useState} from 'react';
import Dropzone from 'react-dropzone-uploader';
import Image from '../../lib/Images';
import 'react-dropzone-uploader/dist/styles.css';
import './style.scss';

const UploadImage = (props) => {
  const [hasImage, setHasImage] = useState('');
  const {ImagePost = () => {}} = props;
  const {Upload} = Image;

  // specify upload params and url for your files
  const getUploadParams = ({meta}) => {
    return {url: 'https://httpbin.org/post'};
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({meta, file}, status) => {
    ImagePost(meta.previewUrl);
    setHasImage(status);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    allFiles.forEach((f) => f.remove());
  };

  return (
    <div className="upload">
      <div className="uploadTitleBox">
        <span className="title">Upload de imagem</span>
      </div>
      <div className="uploadContainer">
        <div className="uploadBox">
          <div
            className="center"
            style={{
              display:
                hasImage === '' || hasImage === 'removed' ? 'flex' : 'none',
            }}>
            <img src={Upload} alt="Upload" />
            <p className="phraseUpload">
              Arraste e solte uma imagem aqui ou clique no botão abaixo
            </p>
          </div>

          <div className="button">
            <Dropzone
              getUploadParams={getUploadParams}
              onChangeStatus={handleChangeStatus}
              onSubmit={handleSubmit}
              accept="image/*,audio/*,video/*"
              inputContent={'Pesquisar imagens'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
