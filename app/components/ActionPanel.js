import React from 'react';


export class ActionPanel extends React.Component {
  render() {
    return (
      <div className="action-panel">
        <div className="center-col">
          <button type="button" className="add-button">Добавить</button>
          <button type="button" className="update-button">Обновить</button>
          <div className="search-container">
            <span className="glyphicon glyphicon-search"></span>
            <input
              type="text"
              className="search-input"
              placeholder="Событие, дата или участник"
            />
          </div> 
        </div>
      </div>
    );
  }
}