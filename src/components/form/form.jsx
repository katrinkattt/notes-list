import './form.css'
import Btn from '../btn/btn'

export default function Form(props) {
    const not = props.not
    const setCurrent = props.setCurrent
    const currentNote = props.currentNote
    const setNote = props.setNote

    let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = mm + '-' + dd + '-' + yyyy;
    function addInList(){
        let title = document.getElementById('formTitle').value
        let text = document.getElementById('formText').value
        let arr = not.length
        if (title != "" && text != "") {
            not[arr] = { title: title, text: text, date: today }
            setCurrent(arr)
            document.getElementById('formTitle').value = ""
            text = document.getElementById('formText').value = ""
        }
        document.getElementById('formMain').style.display = 'none'
        document.getElementById('formEdit').style.display = 'none'
    }
    function editNote(curr){
        let title = document.getElementById('formTitle')
        title.value =  not[curr].title
        let text = document.getElementById('formText')
        text.value =  not[curr].text
        not[curr] = {title: title, text: text, date: today}
        setNote(not)
        setCurrent(curr)
        document.getElementById('formEdit').style.display= 'none'
    }
    let t = props.ftype
    return (
        <div className="form__main" id={props.form}>
            <div className="form__title">{props.title}</div>
            <textarea type="text" className="form__new__title" id="formTitle" name="title" >{props.ftitle}</textarea>
            <textarea type="text" className="form__new__text" id="formText" name="text" >{props.ftext}</textarea>

            <Btn text="Ok" func={t=='add'? () => addInList() : () => editNote(currentNote)}  />
        </div>
    )
}
