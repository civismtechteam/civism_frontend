import  React from 'react'
import './FactList.css'

class FactList extends React.Component {

  render() {
    let facts = [];
    for (var i = 0; i < this.props.facts.length; i++) {
      facts.push(<li key={i}>{this.props.facts[i].body}</li>)
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
