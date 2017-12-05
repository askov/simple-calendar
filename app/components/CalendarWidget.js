import React from 'react';
import { DateCell } from '../containers/DateCell';
import { connect } from 'react-redux';
import {
  compareDatesWithoutTime
} from '../helpers/utils.js';


export class CalendarWidget extends React.Component {
  render() {
    const weekDays = [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье'
    ];
    const weekDaysShort = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    return (
      <ul className="days-container">
        {this.props.dateRange.map((date, index) => {
          const dateTmp = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
          return (
            <DateCell
              key={index}
              date={dateTmp}
              isToday={compareDatesWithoutTime(new Date(), date)}
              isSelected={this.props.selectedDate === dateTmp}
              weekDay={index < 7 ? `${weekDays[index]}, ` : null}
              shortWeekDay={index < 7 ? `${weekDaysShort[index]}, ` : null}
              dayEvent={this.props.myEvents[dateTmp] || null}
            />
          )
        })}
      </ul>
    );
  }
}
