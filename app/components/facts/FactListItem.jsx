import  React from 'react';
import CommentCount from "../shared/CommentCount.jsx";
import UpVoteCount from "../shared/UpVoteCount.jsx";
import DownVoteCount from "../shared/DownVoteCount.jsx";
import "./FactListItem.scss";

class FactListItem extends React.Component {

  render() {
    const { body, num_comments, num_upvotes, num_downvotes } = this.props.fact;
    return (
      <li className="fact-list-item">
        <div> {body}</div>
        <div>
          <CommentCount num_comments={num_comments} />
          <UpVoteCount num_up_votes={num_upvotes} />
          <DownVoteCount num_down_votes={num_downvotes} />
        </div>
      </li>
    );
  }
}

export default FactListItem;
