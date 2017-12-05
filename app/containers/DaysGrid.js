/*******************************************************************************
/*                       containers/DaysGrid.js                                *
*******************************************************************************/
import React from 'react';
import { connect } from 'react-redux';
import { CalendarWidget } from '../components/CalendarWidget';

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selectedDate,
    myEvents: state.myEvents
  }
}

const DaysGrid = connect(
  mapStateToProps
)(CalendarWidget)

export { DaysGrid }