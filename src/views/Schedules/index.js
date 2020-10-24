import React from 'react';
import Header from '../../components/Header';
import './style.scss';

const Schedules = () => {
  const data = localStorage.getItem('data');
  const response = JSON.parse(data);

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
              return (
                <tr key={index}>
                  <td>{item.social}</td>
                  <td className="heigth">
                    <div className="imagePostContainer" />
                  </td>
                  <td className="description">{item.text}</td>
                  <td className="description">
                    {item.date} ás {item.hour}
                  </td>
                  <td>preview</td>
                  <td className="description">Agendado</td>
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