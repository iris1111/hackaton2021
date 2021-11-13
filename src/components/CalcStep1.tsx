import React from 'react';
import './../style/CalcStep1.css';
import { Radio } from 'antd';


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
/*
class Article extends React.Component {
  state = {
    visible: false,
  }
  handleReadMoreClck = () => {
    //e.preventDefault()
    //this.setState({ visible: true })
  }
  render() {
    const { author, text, bigText } = this.props.data
    const { visible } = this.state
    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        <p className='news__text'>{text}</p>
        {
          !visible && <a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Подробнее</a>
        }
        {
          visible && <p className='news__big-text'>{bigText}</p>
        }
      </div>
    )
  }
}

Article.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string.isRequired
  })
}
*/

class Types extends React.Component <any> {
  renderType = () => {
    const { data } = this.props
    let template
          
    if (data.length) {
      template = data.map(function(item) {
        return <Radio value={item.id}>{item.text}</Radio>
      })
    } 
          
    return template
  }
  render() {
    const { data } = this.props
          
    return (
      <div className="types form-text">
        <Radio.Group name="type">
         {this.renderType()}
        </Radio.Group>
      </div>
    );
  }
}

const CalcStep1 = () => {
  return (
    <React.Fragment>
      <div className="block block-1 calc">
        <h1>Данные</h1>

        <div className="col">
          <Types data={types}/>
        </div>
      </div>      
    </React.Fragment>
  )
}

export default CalcStep1;
