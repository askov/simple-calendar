/*******************************************************************************
/*                       containers/EditorControl.js                           *
*******************************************************************************/
import React from 'react';
import { connect } from 'react-redux';
import { showEditor } from '../actions';
import { ActionPanel } from '../components/ActionPanel';


const mapDispatchToProps = (dispatch) => {
  return {
    handleAddClick: () => {
      dispatch(showEditor());
    }
  }
}

const EditorControl = connect(
  null,
  mapDispatchToProps
)(ActionPanel)

export { EditorControl }