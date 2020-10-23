import React from 'react';
import Header from '../../components/Header';
import './style.scss';

const Schedules = () => {
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
            <tr>
              <td>Insta</td>
              <td className="heigth">
                <div className="imagePostContainer" />
              </td>
              <td className="description">Descrição post</td>
              <td className="description">09/10/15 as 12:00h</td>
              <td>preview</td>
              <td className="description">Agendado</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Schedules;
