import React, {useState} from 'react';
import Image from '../../lib/Images';
import Social from '../../assets/json/social-networks';
import './style.scss';

const SocialNetwork = (props) => {
  const {SetSocial = () => {}} = props;
  const [socialSelected, setSocialSelection] = useState('');
  SetSocial(socialSelected);

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
              onClick={() =>
                item.status === 'disabled'
                  ? console.log('notificar que está bloqueado')
                  : setSocialSelection(item.name)
              }>
              <img className="socialLogo" src={icon} alt={item.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialNetwork;
