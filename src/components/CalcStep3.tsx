import { Button, Form, Input } from "antd";
import React from "react";

const CalcStep3 = () => {
  const save = () => {
    window.location.pathname = "/result";
  };

  const electr = Math.ceil(Math.random() * (18758 - 12045) + 12045);
  const water = Math.ceil(Math.random() * (22900 - 19867) + 19867);
  const tech = Math.ceil(Math.random() * (234986 - 197789) + 197789);

  return (
    <div className="block-3">
      <p className="form-label">Рассчет затрат на производство</p>
      <div className="types">
        <p>
          Для выращивания выбранной культуры в этом районе на 1&nbsp;га за сезон
          понадобится: <br />
          <ul>
            <li>
              <b>электроэнергии</b> - {electr} кВт
            </li>
            <li>
              <b>воды</b> - {water} м<sup>3</sup>
            </li>
            <li>
              <b>затраты на содержание оборудование</b> - {tech} рублей
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
        <Form.Item  className="button-btn">
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
