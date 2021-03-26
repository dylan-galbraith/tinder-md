import "./ConfigFinal.scss";
import SubmitButton from "../SubmitButton/SubmitButton";
import BackButton from "../BackButton/BackButton";
import Setup from "../Setup/Setup";
import { Component } from 'react';
import micIcon from '../../assets/icons/mic-icon.svg';

class ConfigFinal extends Component {

  state={
    currentHealth: []
  }

  submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    this.setState({
      currentHealth: [...this.state.currentHealth, e.target.health.value]
    })
    e.target.health.value = '';
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Setup progressFill="progress__inner--80"/>

        <div className="config-final">
          <h2 className="config-final__heading">My current Health:</h2>
          <p className="config-final__text">Tell us how you feel, or any symptoms that you may be experiencing.</p>
          <form className="config-final__form" onSubmit={this.submitHandler}>
            <input className="config-final__input" name="health" type="text" placeholder="Enter"/>
            <img src={micIcon} />
            <button className="config-final__form-button">add</button>
          </form>
          <div>
            {this.state.currentHealth.map(item => {
              return <div className="config-final__input-card">{item}</div>
            })}
          </div>
          <h2 className="config-final__heading">Additional Comments:</h2>
          <textarea className="config-final__text-area" type="text" />
          <h2 className="config-final__heading">Document Upload:</h2>
          <p className="config-final__text">Upload any medical documents you think may be useful. They will be stored on your profile and doctors can easily access them if necessary.</p>
          <button className="config-final__upload">Upload</button>
  
        </div>

        <BackButton link="/config-3-location" />
        <SubmitButton link="/home" />
      </div>
    )
  
  }
}

export default ConfigFinal;
