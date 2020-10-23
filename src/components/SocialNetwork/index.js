import React, {useState} from 'react';
import Image from '../../lib/Images';
import Social from '../../assets/json/social-networks';
import './style.scss';

const SocialNetwork = () => {
  const [socialSelected, setSocialSelection] = useState('');
  console.log('-->', socialSelected);

  const data = Social.data;
  return (
    <div className="socialNetwork">
      <div className="socialTitleBox">
        <span className="title">Redes sociais</span>
      </div>
      <div className="socialList">
        {data.map((item, index) => {
          const icon = Image[item.name];
          const status = item.status === 'disabled' ? 'block' : 'pointer';
          return (
            <div
              className={status}
              key={index}
              onClick={() => setSocialSelection(item.name)}>
              <img className="socialLogo" src={icon} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialNetwork;
