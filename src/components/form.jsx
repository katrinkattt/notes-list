import './form.css'
import Btn from './btn'

export default function Form(props) {
    function addInList() {
        let title = document.getElementById('formTitle').value
        let text = document.getElementById('formText').value
        const not = props.not
        const setCurrent = props.setCurrent
        let arr = not.length
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + '.' + mm + '.' + yyyy;
        if (title != "" && text != "") {
            not[arr] = { title: title, text: text, date: today }
            setCurrent(arr)
            document.getElementById('formTitle').value = ""
            text = document.getElementById('formText').value = ""
        }
        document.getElementById('formMain').style.display = 'none'
    }
    function edit(){
        alert('dsjfks')
    }
    return (
        <div className="form__main" id="formMain">
            <div className="form__title">{props.title}</div>
            <textarea type="text" className="form__new__title" id="formTitle" name="title" ></textarea>
            <textarea type="text" className="form__new__text" id="formText" name="text"></textarea>
            
            <Btn text="Добавить" func={() => addInList()} />
        </div>
    )
}
