import React from "react";
import ReactDOM from "react-dom";
import CalcStep3 from "./CalcStep3";

const cultures = JSON.parse(localStorage.getItem("cultures")!);

const CalcStep2 = ({ type }) => {
  let result = Math.random() < 0.5;
  let template;

  const step3 = () => {
    ReactDOM.render(<CalcStep3 />, document.querySelector(".step3"));
  };

  if (result) {
    template = cultures.map(function (item) {
      if (item.id != type.cult)
        return (
          <p className="form-p">
            <a onClick={() => step3()}>{item.name}</a>
          </p>
        );
    });
    return (
      <div className="block-3">
        <p className="form-label">
          Выращивание данной культуры не рекомендуется в выбранном районе
        </p>
        <p>
          Условия для хорошего урожая и стабильной прибыли выбранной культуры в
          этом районе отстутствуют.
        </p>
        <br />
        <p>Предлагаем рассчитать бизнес-план для других культур: </p>
        {template}
      </div>
    );
  } else {
    step3();
    return <div></div>;
  }
};

export default CalcStep2;
