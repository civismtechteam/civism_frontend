import  React from 'react';
import CommentCount from "../shared/CommentCount.jsx";
import UpVoteCount from "../shared/UpVoteCount.jsx";
import DownVoteCount from "../shared/DownVoteCount.jsx";
import "./FactListItem.scss";

class FactListItem extends React.Component {

  render() {
    const { body, num_comments, num_upvotes, num_downvotes, id } = this.props.fact;
    return (
      <li className="fact-list-item">
        <div> {body}</div>
        <div>
          <CommentCount resource={"fact"} id={id} num_comments={num_comments} />
          <UpVoteCount resource={"fact"} id={id} num_up_votes={num_upvotes} />
          <DownVoteCount resource={"fact"} id={id} num_down_votes={num_downvotes} />
        </div>
      </li>
    );
  }
}

export default FactListItem;
