import  React from 'react'
import './PerspectiveModal.css'
import { Modal, Button } from 'react-bootstrap';
import CommentListItemContainer from "../shared/CommentListItemContainer";

class FactModal extends React.Component {
  render() {
    // const { comments } = this.props.comments;
    let comments = this.props.fact.comments.map(comment => (
      <CommentListItemContainer key={comment.id} comment={comment} />
    ));
    return (
      <div className="comment-holder">
        <ul className="dashed">{comments}</ul>
      </div>
    );
  }
}

export default PerspectiveModal;
