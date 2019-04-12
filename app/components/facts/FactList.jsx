import  React from "react"
import "./FactList.css"
import FactSubmissionContainer from './factSubmission/FactSubmissionContainer.js'
import FactListItemContainer from "./FactListItemContainer";
import { Button } from "react-bootstrap";


class FactList extends React.Component {

  render() {
    let facts = this.props.facts.map(fact => (
      <FactListItemContainer key={fact.id} fact={fact} openModal={this.openModal} closeModal={this.closeModal} />
    ));

    return (
      <div className="fact-holder">
        <ul className="dashed">
        {facts}
        <FactSubmissionContainer />
        </ul>
      </div>
    );
  }
}

export default FactList
