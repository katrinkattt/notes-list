import Btn from './btn'
import Note from './note'
import './blockList.css'

export default function BlockLIst(props) {

    return (
        <div className="block__list">
            <div className="header__list">
                <Btn text="Добавить" func={props.funcAdd}/>
            </div>
            <div className="main__list">
                {
                    props.state.map((obj, id)=>
                    <Note func={()=> props.setCurrent(id)} title={obj.title} text={obj.text} date={obj.date} />
                    )
                }
            </div>
        </div>
    )
}
