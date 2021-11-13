import React, { useState } from 'react';
import { Form, Input, Button, Radio, Select } from 'antd';

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



const CalcStep3 = () => {

  return <div className="block-3">
    <p className="form-label">Рассчет затрат на производство</p>
    <div className="types">
      <p>Для выращивания выбранной культуры в этом районе на 1 га за сезон понадобится: <br />
      
      </p>
      <br />
      <p>Введите цены, чтобы просчитать бизнес-план: </p>
    </div>
  </div>
}

export default CalcStep3;


/*
<Form.Item label="Цена на электроэнергию" required tooltip="This is a required field">
                <Input placeholder="input placeholder" />
              </Form.Item>  
*/