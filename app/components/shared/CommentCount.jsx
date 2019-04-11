import  React from 'react';
import { FaComments } from 'react-icons/fa';
import "./AggregateIcon.scss";
import { withModalAccess } from "../../context/ModalContext.js"

function CommentCount(props) {
  return (
    <div className="aggregate-icon-container" onClick = {() => props.modal.open({resource: props.resource, id: props.id})}>
      <FaComments /> {props.num_comments}
    </div>
  )
}

export default withModalAccess(CommentCount);
