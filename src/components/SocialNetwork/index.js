import React, {useState} from 'react';
import Image from '../../lib/Images';
import Social from '../../assets/json/social-networks';

import './style.scss';

const SocialNetwork = (props) => {
  const {SetSocial = () => {}} = props;
  const [socialSelected, setSocialSelection] = useState('');
  const [isSelected, setIsSelection] = useState(false);
  const [indexSelected, setIndexSelection] = useState('');

  function Selected(name, index) {
    setIndexSelection(index);
    setIsSelection(!isSelected);
    setSocialSelection(name);
  }
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

          let backgroundColorSocial;
          if (item.status === 'disabled') {
            backgroundColorSocial = '#DDDDDD';
          } else if (isSelected && indexSelected === index) {
            backgroundColorSocial = '#6effab';
          }

          return (
            <div
              style={{
                backgroundColor: backgroundColorSocial,
              }}
              className="circle"
              key={index}
              onClick={() =>
                item.status === 'disabled'
                  ? console.log('rede social bloqueada')
                  : Selected(item.name, index)
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
