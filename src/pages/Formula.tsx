import React, { useState } from "react";
import "./../style/App.css";
import "./../style/content.css";
import Menu from "../components/MenuAdmin";
import Bread from "../components/Bread";
import { Input, Slider, notification } from "antd";
import "../style/Formula.css";
import oldFormulaJson from "../data/formula.json";

function Formula() {
  let oldFormula =
    null !== localStorage.getItem("formula")
      ? localStorage.getItem("formula")
      : oldFormulaJson.value;
  let oldCoef =
    null !== localStorage.getItem("coef") ? localStorage.getItem("coef") : 7;
  const [formula, setFormula] = useState(oldFormula);
  const [coef, setCoef] = useState(oldCoef);
  const [notified, setNotified] = useState(false);
  const updateFormula = () => {
    localStorage.setItem("formula", formula!);
    notification["success"]({
      message: "Успешно сохранено!",
      className: "notification-success",
      style: {
        width: 400,
      },
    });
  };
  const incrementCoef = () => {
    let newCoef = +coef! + 1;
    console.log(newCoef);
    setCoef(newCoef);
    localStorage.setItem("coef", newCoef!.toString());
    if (!notified) {
      setTimeout(() => {
        notification["success"]({
          message: "Успешно сохранено!",
          className: "notification-success",
          style: {
            width: 400,
          },
        });
        setNotified(false);
      }, 1000);
    }
    setNotified(true);
  };
  const decrementCoef = () => {
    let newCoef = +coef! - 1;
    console.log(newCoef);
    setCoef(newCoef);
    localStorage.setItem("coef", newCoef!.toString());
    if (!notified) {
      setTimeout(() => {
        notification["success"]({
          message: "Успешно сохранено!",
          className: "notification-success",
          style: {
            width: 400,
          },
        });
        setNotified(false);
      }, 1000);
    }
    setNotified(true);
  };
  const updateCoef = function (newCoef) {
    setCoef(newCoef);
    localStorage.setItem("coef", newCoef!.toString());
    if (!notified) {
      setTimeout(() => {
        notification["success"]({
          message: "Успешно сохранено!",
          className: "notification-success",
          style: {
            width: 400,
          },
        });
        setNotified(false);
      }, 1000);
    }
    setNotified(true);
  };
  const sliderMin = 0;
  const sliderMax = 10;

  return (
    <div className="App">
      <Menu type="set"/>
      <div className="content">
        <Bread />
        <div className="formula">
          <h1 className="formula-title">Формула</h1>
          <div className="formula-block blue">
            <div className="formula-wrapper">
              <div className="formula-label formula-main-label">
                Введите формулу для расчёта:
              </div>
              <div className="formula-input-block">
                <Input
                  className="formula-input"
                  placeholder={oldFormula!}
                  value={formula!}
                  onChange={(event) => setFormula(event.target.value)}
                ></Input>
                <a
                  className="formula-input-save"
                  onClick={() => updateFormula()}
                >
                  Сохранить
                </a>
              </div>
              <div className="formula-label">
                Пример: ID456 * ID265 + ID569 / (ID552 - ID4734), где ID456 — ID
                элемента из таблицы.
              </div>
            </div>
          </div>
          <div className="formula-block">
            <div className="formula-coef-wrapper">
              <div className="formula-label formula-label-coef text-black">
                Показатель Границы эффективности
              </div>
              <div className="coef-slider-block">
                <div className="slider-coef">
                  <div className="slider-coef-value text-blue">
                    {+coef! / 10}
                  </div>
                  <div className="slider-min">
                    <div className={coef === 0 ? "" : "slider-min-point"}></div>
                    <div className="slider-min-value">{sliderMin / 10}</div>
                  </div>
                  <Slider
                    min={sliderMin}
                    max={sliderMax}
                    value={+coef!}
                    tooltipVisible={false}
                    onChange={(value) => updateCoef(value)}
                  ></Slider>
                  <div className="slider-max">
                    <div
                      className={coef === 10 ? "" : "slider-max-point"}
                    ></div>
                    <div className="slider-max-value">{sliderMax / 10}</div>
                  </div>
                </div>
                <div className="coef-form">
                  <div
                    onClick={() => decrementCoef()}
                    className="coef-form-decrement"
                  >
                    <span>-</span>
                  </div>
                  <div className="coef-form-input">
                    <Input
                      className="coef-form-input__input"
                      placeholder={(+coef! / 10).toString()}
                      value={(+coef! / 10).toString()}
                      onChange={(event) => updateCoef(+event.target.value * 10)}
                    ></Input>
                  </div>
                  <div
                    onClick={() => incrementCoef()}
                    className="coef-form-increment"
                  >
                    <span>+</span>
                  </div>
                </div>
                <div className="coef-info">
                  <p>Рекомендуемое значение показателя — 0,75</p>
                  <p>
                    — Если значение показателя меньше установленого, то
                    присваивается статус «Не рекомендуется»;
                  </p>
                  <p>
                    — если значение показателя больше рекомендуемого, то
                    присваивается статус «Рекомендуется»
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formula;
