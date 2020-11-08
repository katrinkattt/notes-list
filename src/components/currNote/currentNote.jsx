import './currentNote.css'
import Btn from '../btn/btn'
export default function CurrentNote(props) {

    return (
        <div className="current__note">
            <div className="btn__content">
                <Btn text="редактировать" func={props.edit} />
                <Btn text="удалить" func={props.del}/>
            </div>
            <div className="title__cur__note">{props.title}</div>
            <div className="text__cur__note">{props.text}</div>
            <div className="date__cur__note">{props.date}</div>
        </div>
    )
}
