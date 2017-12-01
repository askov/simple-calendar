import React from 'react';
import { 
  getDateRangeInMonth,
  firstDayInPrevMonth,
  firstDayInNextMonth,
  firstDayInCurrMonth,
  compareDatesWithoutTime
 } from '../helpers/utils.js';
import { DaysGrid } from '../components/DaysGrid';
import { DatePicker } from '../components/DatePicker';
import { ActionPanel } from '../components/ActionPanel';


export class SimpleCalendar extends React.Component {
  constructor(props) {
    super(props);
    const today = firstDayInCurrMonth(new Date());
    this.state = {
      dateRange: getDateRangeInMonth(today),
      selectedDate: today
    };
    this.handleClickPrev = this.handleClickPrev.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickToday = this.handleClickToday.bind(this);
  }

  handleClickPrev() {
    getDateRangeInMonth(this.state.selectedDate);
    const tmpDate = firstDayInPrevMonth(this.state.selectedDate);
    this.setState({
      dateRange: getDateRangeInMonth(tmpDate),      
      selectedDate: tmpDate
    });
  }
  
  handleClickNext() {
    const tmpDate = firstDayInNextMonth(this.state.selectedDate);    
    this.setState({
      dateRange: getDateRangeInMonth(tmpDate),            
      selectedDate: tmpDate
    });
  }

  handleClickToday() {
    const tmpDate = firstDayInCurrMonth(new Date());
    this.setState({
      dateRange: getDateRangeInMonth(tmpDate),                  
      selectedDate: tmpDate
    });
  }

  render() {
    return (
      <div>
        <ActionPanel />
        <DatePicker
          handleClickPrev={this.handleClickPrev}
          handleClickNext={this.handleClickNext}
          handleClickToday={this.handleClickToday}
          date={this.state.selectedDate}
        />
        <DaysGrid
          dateRange={this.state.dateRange}          
        />
      </div>
    );
  }
}
