import './form.css'
import Btn from './btn'
export default function Form(props){
    return(
        <div className="form__main">
            <div className="form__title">{props.title}</div>
            <textarea type="text" className="form__new__title" name="title" id="newTitle"></textarea>
            <textarea type="text" className="form__new__text" name="text" id="newText"></textarea>
            <Btn text="Добавить" func={props.func} />
        </div>
    )
}