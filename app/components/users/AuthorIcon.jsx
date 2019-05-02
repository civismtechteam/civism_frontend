import  React from 'react'
import './AuthorIcon.scss'
import { FaCheck } from 'react-icons/fa';

class AuthorIcon extends React.Component {
  render() {
    const { first_name, last_name, image_path, verified } = this.props;
    return (
      <div className="author-icon-container">
        <img alt="Profile Picture" src={image_path} />
        <span>{first_name}{verified && <span> <FaCheck style={{ color: 'green' }}/></span>}</span>

        {/*<span>{last_name}</span>*/}
      </div>

    )
  }
}

export default AuthorIcon;
