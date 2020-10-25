import React from 'react';
import moment from 'moment';
import Header from '../../components/Header';
import schedulesList from '../../assets/json/schedules';
import Image from '../../lib/Images';
import './style.scss';

const Schedules = () => {
  const data = localStorage.getItem('data');
  const response = JSON.parse(data);
  const list = schedulesList.data;
  const {Instagram, Linkedin} = Image;

  return (
    <div className="container">
      <Header />
      <div className="padding">
        <div className="tableContainer">
          <table>
            <tr>
              <th className="title">Redes sociais</th>
              <th className="title">Mídia</th>
              <th className="width heigth title">Texto</th>
              <th className="title">Data</th>
              <th className="title">Ações</th>
              <th className="title">Status</th>
            </tr>
            {response.map((item, index) => {
              const social = Image[item.social];
              return (
                <tr key={index}>
                  <td>
                    <img
                      className="socialLogo"
                      src={social}
                      alt={item.social}
                    />
                  </td>
                  <td className="heigth">
                    <div className="imagePostContainer" />
                  </td>
                  <td className="description">{item.text}</td>
                  <td className="description">
                    {item.date} ás {item.hour}h
                  </td>
                  <td>preview</td>
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
                    logo = `<img class="socialLogo" src=${Instagram} />  <img class="socialLogo" src=${Linkedin} />`;
                    break;

                  case 2:
                    logo = `<img class="socialLogo" src=${Instagram} />`;
                    break;
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
                  status = 'Postado com ressalvas';
                  statusColor = '#F2C94C';
                  break;
              }

              return (
                <tr key={index}>
                  <td
                    dangerouslySetInnerHTML={{__html: logo}}
                    className="socialLogoContainer"
                  />
                  <td className="heigth">
                    <img className="imagePostContainer" src={item.media} />
                  </td>
                  <td>
                    <p className="description">{item.text}</p>
                  </td>
                  <td>
                    <span className="description">
                      {date} ás {hour}h
                    </span>
                  </td>
                  <td>preview</td>
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
