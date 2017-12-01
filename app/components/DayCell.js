import React from 'react';
import {
  compareDatesWithoutTime
} from '../helpers/utils.js';


export class DayCell extends React.Component {
    render() {
      //Checking if the current cell represents today
      const isToday = compareDatesWithoutTime(new Date, this.props.date)
      return (
        <div className={"day-cell col-one-seventh" + (isToday ? ' today' : '')}>
          <span className="short-week-day">{this.props.shortWeekDay}</span>
          <span className="week-day">{this.props.weekDay}</span>
          <span className="day-legend">{this.props.date.getDate()}</span>
        </div>
      );
    }
  }
