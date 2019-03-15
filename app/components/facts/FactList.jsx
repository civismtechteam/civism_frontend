import  React from 'react'
import './FactList.css'
import FactListItemContainer from "./FactListItemContainer";

class FactList extends React.Component {

  render() {
    let facts = [];
    for (var i = 0; i < this.props.facts.length; i++) {
      facts.push(<FactListItemContainer key={i} fact={this.props.facts[i]} />)
    }
    return (
      <div className="fact-holder">
        <ul className="dashed">{facts}</ul>
      </div>
    );
  }
}

// module.exports = App;
export default FactList
