import  React from 'react'
import './PerspectiveList.css'
import PerspectiveListItemContainer from "./PerspectiveListItemContainer";
import { Button } from "react-bootstrap";

class PerspectiveList extends React.Component {

  render() {
    /*
    let perspectives = [];
    for (var i = 0; i < this.props.perspectives.length; i++) {
      perspectives.push(<li key={i}><div className="list-item">{this.props.perspectives[i].body}</div></li>)
    }
    */
    let perspectives = this.props.perspectives.map(perspective => (
      <PerspectiveListItemContainer key={perspective.id} perspective={perspective} openModal={this.openModal} closeModal={this.closeModal} />
    ));

    return (
      <div className="perspective-holder">
        <h3>Perspectives</h3>
        <ul>{perspectives}</ul>
      </div>
    );
  }
}

// module.exports = App;
export default PerspectiveList
