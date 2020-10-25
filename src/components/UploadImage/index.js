import React from 'react';
import Dropzone from 'react-dropzone-uploader';

import 'react-dropzone-uploader/dist/styles.css';
import './style.scss';

const UploadImage = (props) => {
  const {ImagePost = () => {}} = props;

  // specify upload params and url for your files
  const getUploadParams = ({meta}) => {
    return {url: 'https://httpbin.org/post'};
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({meta, file}, status) => {
    ImagePost(meta.previewUrl);
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
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*,audio/*,video/*"
      />
    </div>
  );
};

export default UploadImage;
