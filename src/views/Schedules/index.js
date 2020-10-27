import React from 'react';
import moment from 'moment';
import Header from '../../components/Header';
import schedulesList from '../../assets/json/schedules';

import {ModalPreview, ModalPreviewSchedule} from '../../lib/Modal';
import Image from '../../lib/Images';
import './style.scss';

const Schedules = () => {
  const data = localStorage.getItem('data');
  const response = JSON.parse(data);
  const list = schedulesList.data;
  const {WhiteInstagram, WhiteLinkedin} = Image;

  return (
    <div className="container">
      <Header />
      <div className="padding">
        <div className="tableContainer">
          <table>
            <tr>
              <th className="title width150">Redes sociais</th>
              <th className="title">Mídia</th>
              <th className="width heigth title">Texto</th>
              <th className="title width150">Data</th>
              <th className="title width150">Ações</th>
              <th className="title width150">Status</th>
            </tr>
            {response.map((item, index) => {
              const color =
                item.social === 'Instagram' ? 'circleInsta' : 'circleLinke';

              const icon =
                item.social === 'Instagram' ? WhiteInstagram : WhiteLinkedin;

              return (
                <tr key={index}>
                  <td>
                    <div class={color}>
                      <img src={icon} alt={item.social} />
                    </div>
                  </td>
                  <td className="heigth">
                    <img
                      className="imagePostContainer"
                      src={item.image}
                      alt={item.social}
                    />
                  </td>
                  <td className="description">{item.text}</td>
                  <td className="description">
                    {item.date} ás {item.hour}h
                  </td>
                  <td>
                    <ModalPreview
                      name={'Bruno Oliveira'}
                      type={'SchedulesPreview'}
                      textPost={item.text}
                      image={item.image}
                      social={item.social}
                    />
                  </td>
                  <td className="status">
                    <div
                      className="typeStatus"
                      style={{backgroundColor: '#2F80ED'}}
                    />
                    <span className="description">Agendado</span>
                  </td>
                </tr>
              );
            })}
            {list.map((item, index) => {
              const date = moment(item.publication_date).format('DD/MM/YY');
              const hour = moment(item.publication_date).format('HH:mm');

              let logo;
              var tmp = item.social_network_key;
              for (var i = 0; i < tmp.length; i++) {
                var statusKey = tmp[i];
                switch (statusKey) {
                  case 2 && 3:
                    logo = `<div class="circleInsta">
                              <img src=${WhiteInstagram} />
                            </div>
                            <div class="circleLinke">
                              <img src=${WhiteLinkedin} />
                            </div>`;
                    break;

                  case 2:
                    logo = `<div class="circleInsta">
                              <img src=${WhiteInstagram} />
                            <div/>`;
                    break;

                  default:
                    return null;
                }
              }

              let status;
              let statusColor;
              switch (item.status_key) {
                case 1:
                  status = 'Postado';
                  statusColor = '#27AE60';
                  break;
                case 3:
                  status = 'Não aprovado';
                  statusColor = '#F2C94C';
                  break;

                default:
                  return null;
              }

              return (
                <tr key={index}>
                  <td
                    dangerouslySetInnerHTML={{__html: logo}}
                    className="socialLogoContainer"
                  />
                  <td className="heigth">
                    <img
                      className="imagePostContainer"
                      src={item.media}
                      alt="Post"
                    />
                  </td>
                  <td>
                    <p className="description">{item.text}</p>
                  </td>
                  <td>
                    <span className="description">
                      {date} ás {hour}h
                    </span>
                  </td>
                  <td>
                    <ModalPreviewSchedule
                      type={'SchedulesPreview'}
                      textPost={item.text}
                      image={item.media}
                    />
                  </td>
                  <td className="status">
                    <div
                      className="typeStatus"
                      style={{backgroundColor: statusColor}}
                    />
                    <span className="description">{status}</span>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
