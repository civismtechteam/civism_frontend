import  React from 'react'
import './FactSubmission.css'
import { bindAll } from "underscore";

const INITIAL_STATE = {
  body: "",
  source_link: ""
}

class FactSubmission extends React.Component {
  constructor(props) {
    super(props);
    bindAll(this, "_handleSubmit");
    this.state = INITIAL_STATE;
  }

  _handleChange(property) {
    return event => {
      this.setState({
        [property]: event.target.value
      });
    };
  }

  _handleSubmit() {
    this.props.createFact(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    return (
      <div id="fact-submission-container">
        <textarea id="subject" name="subject" placeholder="Submit a fact..." value={this.state.body} onChange={this._handleChange("body")} />
        <input type="text" id="subject" name="subject" placeholder="What's the source?" value={this.state.source_link} onChange={this._handleChange("source_link")} />
        <input type="submit" value="Submit" onClick={this._handleSubmit} />
      </div>
    );
  }
}

// module.exports = App;
export default FactSubmission
