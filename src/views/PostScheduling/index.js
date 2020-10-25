import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SocialNetwork from '../../components/SocialNetwork';
import Calendar from '../../components/Calendar';
import TextPost from '../../components/TextPost';
import UploadImage from '../../components/UploadImage';
import PostPreview from '../../components/PostPreview';

import './style.css';

const PostScheduling = () => {
  const [setDate, getDate] = useState('');
  const [setHour, getHour] = useState('');
  const [setSocial, getSocial] = useState('');
  const [setTextPost, getTextPost] = useState('');
  const [setImagePost, getImagePost] = useState('');

  const data = [
    {
      date: setDate,
      hour: setHour,
      image: setImagePost,
      social: setSocial,
      text: setTextPost,
    },
  ];

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-6 col-s-12">
          <div className="row">
            <div className="col-6 col-s-9">
              <SocialNetwork SetSocial={(type) => getSocial(type)} />
            </div>
            <div className="col-6 col-s-12">
              <Calendar
                SetDate={(date) => getDate(date)}
                SetHour={(hour) => getHour(hour)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-s-12">
              <TextPost SetTextPost={(text) => getTextPost(text)} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-s-12">
              <UploadImage ImagePost={(image) => getImagePost(image)} />
            </div>
          </div>
        </div>
        <div className="col-6 col-s-12 paddingBottom">
          <div className="row">
            <div className="col-12 col-s-12">
              <PostPreview />
            </div>
          </div>
        </div>
      </div>

      <Footer data={data} />
    </div>
  );
};

export default PostScheduling;
