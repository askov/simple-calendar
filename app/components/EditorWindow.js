import React from 'react';


export class EditorWindow extends React.Component {
  render() {
    const dayEvent = this.props.myEvents[this.props.eventDate] || ['', ''];
    const eventTitle = dayEvent[0];
    const eventText = dayEvent[1];
    return this.props.editorVisible ? (
      <div className="shadow-layer">
        <div className="editor-window">
          <span className="editor-date">
            <i className="fa fa-calendar" aria-hidden="true"></i> {this.props.eventDate}
          </span>
          <textarea
            ref="title"
            className="event-title"
            placeholder={"Заголовок"}
            defaultValue={eventTitle}
          >
          </textarea>
          <textarea
            ref="text"            
            placeholder={"Новое событие " + this.props.eventDate}
            defaultValue={eventText}
          >
          </textarea>
          <button
            type="button"
            className="editor-save"
            onClick={
              () => this.props.handleSaveClick(
                Object.assign(
                  {},
                  this.props.myEvents,
                  {
                    [this.props.eventDate]: [
                      this.refs.title.value.trim(),
                      this.refs.text.value.trim()
                    ]
                  }
                )
              )
            }            
          >
            <i className="fa fa-floppy-o" aria-hidden="true"></i> Сохранить
          </button>
          <button
            type="button"
            className="editor-close"
            onClick={this.props.handleCloseClick}
          >
            <i className="fa fa-window-close-o" aria-hidden="true"></i> Закрыть
          </button>
        </div>
      </div>
    ) : (null);
  }
}
