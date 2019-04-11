import  React from 'react';
import CommentCount from "../shared/CommentCount.jsx";
import UpVoteCountContainer from "../shared/UpVoteCountContainer.js";
import DownVoteCountContainer from "../shared/DownVoteCountContainer.js";
import "./FactListItem.scss";

class FactListItem extends React.Component {

  render() {
    const { body, num_comments, num_upvotes, num_downvotes, id } = this.props.fact;
    return (
      <li className="fact-list-item">
        <div className="fact"> {body}</div>
        <div className="actions">
          <CommentCount resource={"fact"} id={id} num_comments={num_comments} />
          <UpVoteCountContainer resource={"fact"} id={id} num_up_votes={num_upvotes} />
          <DownVoteCountContainer resource={"fact"} id={id} num_down_votes={num_downvotes} />
        </div>
      </li>
    );
  }
}

export default FactListItem;
