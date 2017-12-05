/*******************************************************************************
/*                       containers/DayEventsEditor.js                         *
*******************************************************************************/
import React from 'react';
import { connect } from 'react-redux';
import { hideEditor, changeEvents } from '../actions';
import { EditorWindow } from '../components/EditorWindow';


const mapStateToProps = (state) => {
  return {
    editorVisible: state.editorWindowVisible,
    eventDate: state.selectedDate,
    myEvents: state.myEvents
  }
}
const mapDispatchToProps = (dispatch) => {
  const saveToLocalStorage = (updatedEvents) => {
    localStorage.setItem('myEvents', JSON.stringify(updatedEvents));
  }
  return {
    handleCloseClick: () => {
      dispatch(hideEditor());
    },
    handleSaveClick: (updatedEvents) => {
        saveToLocalStorage(updatedEvents);
        dispatch(changeEvents(updatedEvents));
        dispatch(hideEditor());
      }
  }
}

const DayEventsEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorWindow)

export { DayEventsEditor }