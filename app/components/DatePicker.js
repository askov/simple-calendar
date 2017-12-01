import React from 'react';


export class DatePicker extends React.Component {
  render() {
    const months = [
      'Январь', 'Февраль', 'Март', 'Апрель',
      'Май', 'Июнь', 'Июль', 'Август',
      'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];    
    return (
      <div className="month-control-panel">
        <button
          type="button"
          className="month-prev"
          onClick={this.props.handleClickPrev}
        >
          <i className="fa fa-caret-left"></i>
        </button>
        <span className="date-m-y">
          {`${months[this.props.date.getMonth()]} ${this.props.date.getFullYear()}`}
        </span>
        <button
          type="button"
          className="month-next"
          onClick={this.props.handleClickNext}
        >
          <i className="fa fa-caret-right"></i>
        </button>
        <button
          type="button"
          className="date-today"
          onClick={this.props.handleClickToday}
        >
          Сегодня
        </button>
      </div>
    );
  }
}