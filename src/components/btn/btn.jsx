import './btn.css'
export default function Btn(props) {
    return (
        <button onClick={props.func} className="btn__main">
            <div className="btn__text">{props.text}</div>
        </button>
    )
}
