import './currentNote.css'
import Btn from './btn'
export default function CurrentNote(props) {
    return (
        <div className="current__note">
            <div className="btn__content">
                <Btn text="редактировать" />
                <Btn text="удалить" />
            </div>
            <div className="title__cur__note">{props.title}</div>
            <div className="text__cur__note">{props.text}</div>
            <div className="date__cur__note">{props.date}</div>
        </div>
    )
}
