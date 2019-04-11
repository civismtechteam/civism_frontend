import  React from 'react'
import './PerspectiveList.css'

class PerspectiveList extends React.Component {

  render() {
    let perspectives = [];
    for (var i = 0; i < this.props.perspectives.length; i++) {
      perspectives.push(<li key={i}><div className="list-item">{this.props.perspectives[i].body}</div></li>)
    }
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
