import  React from 'react';
import CommentCount from "../shared/CommentCount.jsx";
import UpVoteCountContainer from "../shared/UpVoteCountContainer.js";
import DownVoteCountContainer from "../shared/DownVoteCountContainer.js";
import "./CommentListItem.scss";

class CommentListItem extends React.Component {

  render() {
    const { body, num_comments, num_upvotes, num_downvotes, id } = this.props.comment;
    return (
      <li className="comment-list-item">
        <div className="comment"> {body}</div>
        <div className="actions">
          <CommentCount resource={"comment"} id={id} num_comments={num_comments} />
          <UpVoteCountContainer resource={"comment"} id={id} num_up_votes={num_upvotes} />
          <DownVoteCountContainer resource={"comment"} id={id} num_down_votes={num_downvotes} />
        </div>
      </li>
    );
  }
}

export default CommentListItem;
