import React from 'react';
import { DayCell } from './DayCell';


export class DaysGrid extends React.Component {
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
      <div className="days-container">
        {this.props.dateRange.map((date, index) =>
          <DayCell
            key={index}
            date={date}
            weekDay={index < 7 ? `${weekDays[index]}, ` : null}
            shortWeekDay={index < 7 ? `${weekDaysShort[index]}, ` : null}
          />
        )}
      </div>
    );
  }
}
