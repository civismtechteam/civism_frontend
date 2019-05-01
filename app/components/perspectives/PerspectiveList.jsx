import  React from 'react'
import './PerspectiveList.css'
import './FilterContainer.scss'
import PerspectiveListItemContainer from "./PerspectiveListItemContainer";
import { Button } from "react-bootstrap";

class PerspectiveList extends React.Component {

  render() {
    let perspectives = this.props.perspectives.map(perspective => (
      <PerspectiveListItemContainer key={perspective.id} perspective={perspective} openModal={this.openModal} closeModal={this.closeModal} />
    ));

    return (
      <div className="perspective-holder">
        <h3>Perspectives</h3>
        <div id="filter-container">
          <label><input type="checkbox" />Conservative</label>
          <label><input type="checkbox" />Liberal</label>
          <label><input type="checkbox" />Moderate</label>
          <label><input type="checkbox" />Neo-Liberal</label>
          <label><input type="checkbox" />Laissez-Faire</label>
          {/*<label><input type="checkbox" />Capitalist</label>*/}
          {/*<label><input type="checkbox" />Socialist</label>*/}
        </div>
        <ul>{perspectives}</ul>
      </div>
    );
  }
}

export default PerspectiveList
