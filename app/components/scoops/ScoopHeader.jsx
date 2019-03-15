import  React from 'react'
import './ScoopHeader.css'

class ScoopHeader extends React.Component {

  render() {
    return <h1>{this.props.name}</h1>;
  }
}

// module.exports = App;
export default ScoopHeader
