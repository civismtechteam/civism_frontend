import  React from 'react'
import './Header.css'

const header = (
  <div className="header">
    <a className="logo">Civism</a>
    <div className="header-right">
      <a>Login</a>
    </div>
  </div>
);

class Header extends React.Component {

  render() {
    return header;
  }
}

// module.exports = App;
export default Header
