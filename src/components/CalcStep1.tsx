import React, { useState } from 'react';
import './../style/CalcStep1.css';
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import './../style/CalcStep1.css';

type RequiredMark = boolean | 'optional';

const CalcStep1 = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
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

  return (
    <React.Fragment>
      <div className="block block-1 calc">
        <h1>Данные</h1>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          
          
          
          
          <div className="col">

            <Form.Item label="Required Mark" name="requiredMarkValue">
            <Radio.Group>
              <Radio.Button value="optional">Optional</Radio.Button>
              <Radio.Button value>Required</Radio.Button>
              <Radio.Button value={false}>Hidden</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Field A" required tooltip="This is a required field">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item
            label="Field B"
            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
          >
            <Input placeholder="input placeholder" />
          </Form.Item>            

            <div className="types">
              <Radio.Group name="type">
                {renderType()}
              </Radio.Group>
            </div>

            <Form.Item>
              <Button type="primary" className="submitButton">Рассчитать</Button>
            </Form.Item>
          </div>
        </Form>
      </div>      
    </React.Fragment>
  );
};

export default CalcStep1;

/*
function CalcStep12() {
  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="block block-1">
      <h1>Данные</h1>
      <div className="col">
        
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
        </Radio.Group>
      </div>
    </div>
  );
}*/


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