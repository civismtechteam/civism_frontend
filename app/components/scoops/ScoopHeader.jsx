import  React from 'react'
import './ScoopHeader.css'

class ScoopHeader extends React.Component {

  render() {
    return (
      <div className="scoop-header">
        <h1>{this.props.name}</h1>
        <img src="https://psmag.com/.image/t_share/MTYyMTE1NDk5NjI5NDg3NDA2/gettyimages-1059173626.jpg" alt="Long Island City" />
      </div>
    );
  }
}

// module.exports = App;
export default ScoopHeader
