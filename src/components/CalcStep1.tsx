import { Button, Form, notification, Radio, Select } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import "./../style/CalcStep1.css";
import CalcStep2 from "./CalcStep2";

const types = [
  {
    id: 1,
    text: "Открытый грунт",
  },
  {
    id: 2,
    text: "Теплицы",
  },
];
const { Option } = Select;
const cultures = JSON.parse(localStorage.getItem("cultures")!);
const regions = JSON.parse(localStorage.getItem("regions")!);

const CalcStep1 = () => {
  const data = {};

  const [form] = Form.useForm();

  const openNotification = () => {
    notification.open({
      message: "Ошибка",
      description: "Не все поля заполнены",
    });
  };

  const renderType = () => {
    const data = types;
    let template;

    if (data.length) {
      template = data.map(function (item) {
        return (
          <Radio className="form-text" value={item.id} key={item.id}>
            {item.text}
          </Radio>
        );
      });
    }

    return template;
  };

  const setState = (key, value) => {
    data[key] = value;
  };

  function onChangeRegion(value) {
    setState("region", value);
  }

  function onChange(value) {
    setState("cult", value);
  }

  function onChangeType(e) {
    setState("type", e.target.value);
  }

  const onFinish = (values: any) => {
    if (!data["type"] || !data["region"] || !data["cult"]) {
      openNotification();
    } else {
      ReactDOM.render(
        <CalcStep2 type={data} />,
        document.querySelector(".step2")
      );
    }
  };

  return (
    <React.Fragment>
      <div className="block block-1 calc">
        <h1>Данные</h1>
        <div className="block-3">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="col">
              <p className="form-label">Регион</p>
              <div className="types">
                <Select
                  showSearch
                  style={{ width: 300 }}
                  placeholder="Выберите регион"
                  optionFilterProp="children"
                  onChange={onChangeRegion}
                >
                  {regions!.map((region) => {
                    return <Option value={region.id}>{region.name}</Option>;
                  })}
                </Select>
              </div>

              <p className="form-label">Культура</p>
              <div className="types">
                <Select
                  showSearch
                  style={{ width: 300 }}
                  placeholder="Выберите культуру"
                  optionFilterProp="children"
                  onChange={onChange}
                >
                  {cultures!.map((culture) => {
                    return <Option value={culture.id}>{culture.name}</Option>;
                  })}
                </Select>
              </div>

              <Form.Item name="type" className="types">
                <Radio.Group onChange={onChangeType}>
                  {renderType()}
                </Radio.Group>
              </Form.Item>

              <Form.Item className="button-btn">
                <Button
                  type="primary"
                  className="submitButton"
                  htmlType="submit"
                >
                  Рассчитать
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
        <div className="step2"></div>
        <div className="step3"></div>
      </div>
    </React.Fragment>
  );
};

export default CalcStep1;
