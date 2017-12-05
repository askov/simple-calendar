/*******************************************************************************
/*                            reducers/index.js                                *
*******************************************************************************/
import { combineReducers } from 'redux';
import {
  SELECTED_DATE_CHANGED,
  HIDE_EDITOR_WINDOW,
  SHOW_EDITOR_WINDOW,
  TOGGLE_EDITOR_VISIBILITY,
  PLANNED_EVENTS_CHANGED
} from '../actions';

const INITIAL_DATE = (function() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
})();

const SAVED_EVENTS = (function() {
  return localStorage.getItem('myEvents')
    ? JSON.parse(localStorage.getItem('myEvents'))
    : {};
})();

function myEvents(state = SAVED_EVENTS, action) {
  switch (action.type) {
    case PLANNED_EVENTS_CHANGED:
      return action.plannedEvents;
    default:
      return state;
  }
}

function selectedDate(state = INITIAL_DATE, action) {
  switch (action.type) {
    case SELECTED_DATE_CHANGED:
      return action.sDate;
    default:
      return state;
  }
}

function editorWindowVisible(state = false, action) {
  switch (action.type) {
    case HIDE_EDITOR_WINDOW:
      return false;
    case SHOW_EDITOR_WINDOW:
      return true;
    case TOGGLE_EDITOR_VISIBILITY:
      return !state;
    default:
      return state;
  }
}

export const simpleCalendarApp = combineReducers({
  selectedDate,
  editorWindowVisible,
  myEvents
});
