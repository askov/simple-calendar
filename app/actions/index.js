/*******************************************************************************
/*                              actions/index.js                               *
*******************************************************************************/
export const SELECTED_DATE_CHANGED = 'SELECTED_DATE_CHANGED';

export const HIDE_EDITOR_WINDOW = 'HIDE_EDITOR_WINDOW';
export const SHOW_EDITOR_WINDOW = 'SHOW_EDITOR_WINDOW';
export const TOGGLE_EDITOR_VISIBILITY = 'TOGGLE_EDITOR_VISIBILITY';

export const PLANNED_EVENTS_CHANGED = 'PLANNED_EVENTS_CHANGED';

export function updateSelectedDate(sDate) {
  return {type: SELECTED_DATE_CHANGED, sDate}
}

export function hideEditor() {
  return {type: HIDE_EDITOR_WINDOW}
}

export function showEditor() {
  return {type: SHOW_EDITOR_WINDOW}
}

export function toggleEditorVisibility() {
  return {type: TOGGLE_EDITOR_VISIBILITY}
}

export function changeEvents(plannedEvents) {
  return {type: PLANNED_EVENTS_CHANGED, plannedEvents}
}
