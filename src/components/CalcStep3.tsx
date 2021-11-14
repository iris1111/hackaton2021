import React, { useState } from 'react';
import { Form, Input, Button, Radio, Select,  Tooltip } from 'antd';

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
  const save = () => {
    window.location.pathname = '/result';
  }

  return <div className="block-3">
    <p className="form-label">Рассчет затрат на производство</p>
    <div className="types">
      <p>Для выращивания выбранной культуры в этом районе на 1&nbsp;га за сезон понадобится: <br />
        <ul>
          <li><Tooltip title="Затраты на освещение парников и складов" color="cian" ><b>электроэнергии</b></Tooltip> - 15 000 кВт</li>
          <li><Tooltip title="Затраты на дополнительный полив" color="cian" ><b>воды</b></Tooltip> - 20 000 м<sup>3</sup></li>
          <li><Tooltip title="Амортизация техники" color="cian" ><b>затраты на содержание оборудование</b></Tooltip> - 200 000 рублей</li>
        </ul>
      </p>
      <br />
      <p>Введите цены, чтобы просчитать бизнес-план: </p>
      <Form.Item name="priceEnergy" label="Цена на электроэнергию"  tooltip="Средняя цена в вашем районе">
        <Input placeholder="0" />
      </Form.Item>
      <Form.Item name="priceWater" label="Цена на воду"  tooltip="Средняя цена в вашем районе">
        <Input placeholder="0" />
      </Form.Item>
      <Form.Item>
                <Button type="primary" className="submitButton" onClick={() => save()}>Показать бизнес-план</Button>
              </Form.Item>
    </div>
  </div>
}

export default CalcStep3;


/*

*/