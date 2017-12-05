/*******************************************************************************
/*                       containers/DateCell.js                                *
*******************************************************************************/
import React from 'react';
import { connect } from 'react-redux';
import { updateSelectedDate } from '../actions';
import { DayWidget } from '../components/DayWidget';

const mapStateToProps = (state) => {
  return {
    sDate: state.selectedDate,
    myEvents: state.myEvents
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleDayClick: (e) => {
      dispatch(updateSelectedDate(e.target.id));
    }
  }
}

const DateCell = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayWidget)

export { DateCell }
