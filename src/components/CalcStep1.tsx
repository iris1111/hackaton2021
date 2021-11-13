import React, { useState } from 'react';
import ReactDOM from "react-dom";
import CalcStep2 from './CalcStep2';
import './../style/CalcStep1.css';
import { Form, Input, Button, Radio, Select, notification  } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './../style/CalcStep1.css';

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

const { Option } = Select;

const CalcStep1 = () => {
  const data = {};
  const [form] = Form.useForm();

  const openNotification = () => {
    notification.open({
      message: 'Ошибка',
      description:
        'Не все поля заполнены',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  const renderType = () => {
    const  data  = types
    let template
          
    if (data.length) {
      template = data.map(function(item) {
        return <Radio className="form-text" value={item.id}>{item.text}</Radio>
      })
    } 
          
    return template
  }

  const setState = (key, value) => {
    data[key]= value;
  }

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
    if (!data['type'] || !data['region'] || !data['cult']) {
      openNotification()
    } else {
      ReactDOM.render(<CalcStep2 type={data}/>, document.querySelector('.step2'));
    }
  };

  return (
    <React.Fragment>
      <div className="block block-1 calc">
        <h1>Данные</h1>        
        <div className="block-3">
          <Form 
            form={form}
            layout="vertical"
            onFinish={onFinish}
            >            
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
                  <Option value="1">Йошкар-Ола</Option>
                  <Option value="2">Первый район</Option>
                  <Option value="3">Второй район</Option>
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
                  <Option value="1">Капуста</Option>
                  <Option value="2">Картофель</Option>
                  <Option value="3">Свекла</Option>
                </Select>       
              </div>

              <Form.Item name="type" className="types">
                <Radio.Group onChange={onChangeType}>
                  {renderType()}
                </Radio.Group>
              </Form.Item>

              <Form.Item>
                <Button type="primary" className="submitButton" htmlType="submit">Рассчитать</Button>
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
