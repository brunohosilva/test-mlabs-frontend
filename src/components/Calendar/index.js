import React from 'react';
import {DatePicker} from '../../../node_modules/rsuite';
import moment from 'moment';

import './style.scss';
import 'rsuite/dist/styles/rsuite-default.css';

const Calendar = () => {
  function GetDate(e) {
    const date = moment(e[0]).format('YYYY-MM-DD');
    console.log('data -->', date);
  }

  function GetHour(e) {
    const hour = moment(e[0]).format('HH:MM');
    console.log('data -->', hour);
  }

  return (
    <div className="calendar">
      <div className="calendarTitleBox">
        <span className="title">Data de publicação</span>
      </div>
      <div className="config">
        <DatePicker
          placement="auto"
          placeholder="DD/MM"
          format="DD MMM YYYY"
          locale={{
            friday: 'Sex',
            last7Days: 'Ultimos 7 dias',
            monday: 'Seg',
            ok: 'OK',
            saturday: 'Sab',
            sunday: 'Dom',
            thursday: 'Qui',
            today: 'Hoje',
            tuesday: 'Ter',
            wednesday: 'Qua',
            yesterday: 'Ontem',
          }}
          onChange={GetDate}
        />
        <DatePicker
          format="HH:mm"
          placement="auto"
          locale={{
            hours: 'Hora',
            minutes: 'Minuto',
            today: 'Hoje',
            yesterday: 'Ontem',
          }}
          onChange={GetHour}
        />
      </div>
    </div>
  );
};

export default Calendar;
