import './note.css'
export default function Note(props) {
    return (
      <div className="note_main" onClick={props.func}>
          <div className="note__title">{props.title}</div>
          <div className="note__text">{props.text}</div>
      </div>
    );
  }