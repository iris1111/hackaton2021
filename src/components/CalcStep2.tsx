import React, { useState } from 'react';
import CalcStep3 from './CalcStep3';
import ReactDOM from "react-dom";

const types = [
  {
    id: 1,
    text: 'Открытый грунт'
  },
  {
    id: 2,
    text: 'Парник'
  }
];

const cults = [
  {
    id: 1,
    text: 'Капуста'
  },
  {
    id: 2,
    text: 'Картофель'
  },
  {
    id: 3,
    text: 'Свекла'
  }
];

const CalcStep2 = ({type}) => {
  let result = Math.random() < 0.5;
  let template

  const step3 = () => {
    ReactDOM.render(<CalcStep3 />, document.querySelector('.step3'))
  }

  if(result) {
    template = cults.map(function(item) {
      if(item.id != type.cult)
      return <p className="form-p"><a onClick={() => step3() }>{item.text}</a></p>
    })
    return <div className="block-3"><p className="form-label">Выращивание данной культуры не рекомендуется в выбранном районе</p><p>Условия для хорошего урожая и стабильной прибыли выбранной культуры в этом районе отстутствуют. Предалагем рассчитать бизнес-план для других культур в этом районе: </p> {template}</div>
  } else {
    step3()
  }
}

export default CalcStep2;
