import { Button, Form, Input } from "antd";
import React from "react";

const CalcStep3 = () => {
  const save = () => {
    window.location.pathname = "/result";
  };

  return (
    <div className="block-3">
      <p className="form-label">Рассчет затрат на производство</p>
      <div className="types">
        <p>
          Для выращивания выбранной культуры в этом районе на 1&nbsp;га за сезон
          понадобится: <br />
          <ul>
            <li>
              <b>электроэнергии</b> - 15000 кВт
            </li>
            <li>
              <b>воды</b> - 20000 м<sup>3</sup>
            </li>
            <li>
              <b>затраты на содержание оборудование</b> - 200 000 рублей
            </li>
          </ul>
        </p>
        <br />
        <p>Введите цены, чтобы просчитать бизнес-план: </p>
        <Form.Item
          name="priceEnergy"
          label="Цена на электроэнергию"
          tooltip="Средняя цена в вашем районе"
        >
          <Input placeholder="0" />
        </Form.Item>
        <Form.Item
          name="priceWater"
          label="Цена на воду"
          tooltip="Средняя цена в вашем районе"
        >
          <Input placeholder="0" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            className="submitButton"
            onClick={() => save()}
          >
            Показать бизнес-план
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default CalcStep3;

/*

*/
