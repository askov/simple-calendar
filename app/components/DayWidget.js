import React from 'react';


export class DayWidget extends React.Component {
  render() {
    return (
      <li
        className={
          "day-cell col-one-seventh" +
          (this.props.isToday ? ' today' : '') +
          (this.props.isSelected ? ' selected' : '')          
        }
        onClick={ this.props.handleDayClick }
        id={ this.props.date }
      >
        <span className="short-week-day">{this.props.shortWeekDay}</span>
        <span className="week-day">{this.props.weekDay}</span>
        <span className="day-legend">{this.props.date.split('-')[2]}</span>
        <div className="day-event">
          <strong>{this.props.dayEvent ? this.props.dayEvent[0] : ''}</strong><br />
          {this.props.dayEvent ? this.props.dayEvent[1] : ''}
        </div>
      </li>
    );
  }
}
