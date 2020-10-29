import React, { useState } from 'react'
import Btn from './btn'
import BlockLIst from './blockList'
import CurrentNote from './currentNote'
import Form from './form'

export default function Main(){

var [currentNote, setCurrent] = useState(0)
const [not, setNote] = useState([{
  title: 'kjs in obj',
  text: 'eodinwek edweknlw wep;l powe p wql xmz,n ',
  date: '15.10.2020',
  id: 0
},
{
  title: 'python in obj',
  text: 'eodinwek edweknlw wep;l powe p wql xmz,n ',
  date: '10.10.2020',
  id:1
},
{
  title: 'useState',
  text: 'Единственный аргумент useState это исходное состояние. В отличие от случая с классами, состояние может быть и не объектом, а строкой или числом, если нам так удобно. Поскольку в нашем примере отслеживается количество сделанных пользователем кликов, мы передаём 0 в качестве исходного значения переменной. (Если нам нужно было бы хранить два разных значения в состоянии, то пришлось бы вызвать useState() дважды.) ',
  date: '25.09.2020',
  id:2
}])
return (
  <div className="app">
    <BlockLIst state={not} setCurrent={setCurrent} currentNote={currentNote} />
    <CurrentNote title={not[currentNote].title} text={not[currentNote].text} date={not[currentNote].date} />

    <Form title="добавть новую запись" />
  </div>
);
}