import  React from 'react'
import './ScoopHeader.css'

class ScoopHeader extends React.Component {

  render() {
    return (
      <div className="scoop-header">
        <p>{this.props.name}</p>
        <img src="https://imgs.6sqft.com/wp-content/uploads/2018/10/31100800/LIC-Investment-Strategy.png" alt="Long Island City" />
      </div>
    );
  }
}

// module.exports = App;
export default ScoopHeader
