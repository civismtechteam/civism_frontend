import  React from 'react';
import CommentCount from "../shared/CommentCount.jsx";
import UpVoteCountContainer from "../shared/UpVoteCountContainer.js";
import DownVoteCountContainer from "../shared/DownVoteCountContainer.js";
import AuthorIconContainer from "../users/AuthorIconContainer.js";
import "./PerspectiveListItem.scss";

class PerspectiveListItem extends React.Component {

  render() {
    const { body, num_comments, num_upvotes, num_downvotes, id, user_id } = this.props.perspective;
    return (
      <li className="perspective-list-item">
      <AuthorIconContainer userId={user_id} />
        <div className="perspective"> {body}</div>
        <div className="actions">
          <CommentCount resource={"perspective"} id={id} num_comments={num_comments} />
          <UpVoteCountContainer resource={"perspective"} id={id} num_up_votes={num_upvotes} />
          <DownVoteCountContainer resource={"perspective"} id={id} num_down_votes={num_downvotes} />
        </div>
      </li>
    );
  }
}

export default PerspectiveListItem;
