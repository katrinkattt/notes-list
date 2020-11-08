import React, { useState } from 'react'
import Btn from './btn/btn'
import BlockLIst from './blockList/blockList'
import CurrentNote from './currNote/currentNote'
import Form from './form/form'

export default function Main() {

  var [currentNote, setCurrent] = useState(0)
  const [not, setNote] = useState([{
    title: 'Skyrim. Древнее знание',
    text: 'По заданию у Довакина есть выбор — обратиться к Арнгейру (Седобородым) или к Эсберну (Клинки) (Эсберн стоит у Стены Алдуина в Храме Небесной гавани, а Арнгейр находится в Высоком Хротгаре) и рассказать о Древнем свитке. Кого бы вы не выбрали, Довакина перенаправят к магам из Коллегии Винтерхолда, так как у них большая библиотека, содержащая многовековые знания. Чтобы войти в неё, герою нужно сдать мини-экзамен на вступление в коллегию (либо сказать, что он — Довакин). Там Довакин найдёт главного библиотекаря — Урага гро-Шуба. Поговорив с ним о свитке, протагонист узнает, где сейчас Септимий Сегоний.',
    date: '10-17-2020',
  },
  {
    title: 'АВЛ-деревья',
    text: 'АВЛ-деревья, расстановка балансов при двойном повороте. Pivot и Current — те же самые, но добавляется третий участник поворота. Обозначим его за «Bottom»: это (при двойном правом повороте) левый сын Pivot’а, а при двойном левом — правый сын Pivot’а. При данном повороте — Bottom в результате всегда приобретает баланс 0, но от его исходного баланса зависит расстановка балансов для Pivot и Current. ',
    date: '10-30-2020',
  },
  {
    title: '«Серебряная пуля» – Бред Д. Хопкинс',
    text: 'Объем продаж падал вот уже шесть кварталов подряд. Фабрика боеприпасов несла катастрофические потери и стояла на грани банкротства. Исполнительный директор Скотт Филипс понятия не имел, в чем дело, но акционеры, наверняка, обвинят во всем его. Он открыл ящик стола, достал револьвер, приложил дуло к виску и спустил курок.    Осечка. «Так, займемся отделом контроля качества продукции.»',
    date: '10-09-2020'
  },
  {
    title: 'useState',
    text: 'Единственный аргумент useState это исходное состояние. В отличие от случая с классами, состояние может быть и не объектом, а строкой или числом, если нам так удобно. Поскольку в нашем примере отслеживается количество сделанных пользователем кликов, мы передаём 0 в качестве исходного значения переменной. (Если нам нужно было бы хранить два разных значения в состоянии, то пришлось бы вызвать useState() дважды.) ',
    date: '10-29-2020',
  }])
  function add() {
    document.getElementById('formMain').style.display = 'block'
  }
  function del() {
    alert(not[currentNote].title + ' удалить записку?')
    not.splice(currentNote, 1)
    let last = not.length - 1
    if (currentNote < last) {
      setCurrent(currentNote + 1)
    }
    else if (currentNote == 0) {
      setCurrent(currentNote + 1)
    }
    else {
      setCurrent(currentNote - 1)
    }
  }
  function edit() {
    document.getElementById('formEdit').style.display = 'block'
    alert(not[currentNote].title + ' редактировать записку?')
    //основная функция в form.jsx
  }
  function sorting() {

    for (let i = 0; i < not.length; i++) {
      not[i].date = new Date(not[i].date)
      not[i].date.toDateString()
    }
    function sorts(a, b) {
      return a.date - b.date
    }
    const res = not.sort(sorts)
    setNote(res)
    setCurrent(currentNote)
    console.log(res)
  }
  return (
    <div className="app">
      <div className="sort__container"><Btn text="сортировка" func={() => sorting()} /></div>
      <BlockLIst state={not} setCurrent={setCurrent} currentNote={currentNote} funcAdd={() => add()} />
      <CurrentNote title={not[currentNote].title} text={not[currentNote].text} date={not[currentNote].date} del={() => del()} edit={() => edit()} />

      <Form ftype="add" title="добавть новую запись" form='formMain' setNote={setNote} currentNote={currentNote} setCurrent={setCurrent} not={not} />

      <Form ftype="edit" title="Редактировать запись" form='formEdit' ftitle={not[currentNote].title} ftext={not[currentNote].text} setNote={setNote} currentNote={currentNote} setCurrent={setCurrent} not={not} />

    </div>
  );
}