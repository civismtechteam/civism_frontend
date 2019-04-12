import  React from 'react'
import './AuthorIcon.scss'

class AuthorIcon extends React.Component {
  render() {
    const { first_name, last_name, image_path } = this.props;
    return (
      <div className="author-icon-container">
        <img alt="Profile Picture" src={image_path} />
        <span>{first_name}</span>
        {/*<span>{last_name}</span>*/}
      </div>

    )
  }
}

export default AuthorIcon;
