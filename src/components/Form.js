import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="form">
        <h1>
            To subscribe to our newsletter,
        </h1>   
          
        <h2>
            Please fill in your email id
        </h2>  
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <br />
          <input className = "formbutton" type="submit" value="Submit" />
        </form>
        </div>
      );
    }
}

export default NameForm;