import  React from 'react'
import './CivismModal.css'
import { Modal, Button } from 'react-bootstrap';
import CommentListItemContainer from "./CommentListItemContainer";

class CivismModal extends React.Component {
  render() {
    // const { comments } = this.props.comments;
    let comments;
    if (this.props.resource === 'fact') {
      comments = this.props.fact.comments.map(comment => (
        <CommentListItemContainer key={comment.id} comment={comment} />
      ));
    }
    if (this.props.resource === 'perspective') {
      comments = this.props.perspective.comments.map(comment => (
        <CommentListItemContainer key={comment.id} comment={comment} />
      ));
    }

    return (
      <div className="comment-holder">
        <ul className="dashed">{comments}</ul>
      </div>
    );
  }
}

export default CivismModal;
