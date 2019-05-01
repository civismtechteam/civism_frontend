import  React from 'react'
import './PerspectiveList.css'
import PerspectiveListItemContainer from "./PerspectiveListItemContainer";
import { Button } from "react-bootstrap";

class PerspectiveList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Conservative: true,
      Liberal: true,
      Moderate: true,
      ["Neo-Liberal"]: true,
      ["Laissez-Faire"]: true
    }
  }

  _handleChange(viewpoint) {
    return (event) => {
      this.setState({[viewpoint]: event.currentTarget.checked})
    }
  }

  render() {
    let filteredPerspectives = this.props.perspectives.filter(perspective => this.state[perspective.viewpoint])
    let perspectives = filteredPerspectives.map(perspective => (
      <PerspectiveListItemContainer key={perspective.id} perspective={perspective} openModal={this.openModal} closeModal={this.closeModal} />
    ));

    return (
      <div className="perspective-holder">
        <h3>Perspectives</h3>
        <form name="filtering">
          <input type="checkbox" value="conservative" checked={this.state.Conservative} onChange={this._handleChange("Conservative")} />Conservative
          <input type="checkbox" value="liberal" checked={this.state.Liberal} onChange={this._handleChange("Liberal")}/>Liberal
          <input type="checkbox" value="moderate" checked={this.state.Moderate} onChange={this._handleChange("Moderate")}/>Moderate
          <input type="checkbox" value="neoliberal" checked={this.state["Neo-Liberal"]} onChange={this._handleChange("Neo-Liberal")}/>Neo-Liberal
          <input type="checkbox" value="laissezfaire" checked={this.state["Laissez-Faire"]} onChange={this._handleChange("Laissez-Faire")}/>Laissez Faire
        </form>
        <ul>{perspectives}</ul>
      </div>
    );
  }
}

export default PerspectiveList
