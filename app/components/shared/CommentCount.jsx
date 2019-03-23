import  React from 'react';
import { FaComments } from 'react-icons/fa';
import "./AggregateIcon.scss";
import { withModalAccess } from "../../context/ModalContext.js"

function CommentCount(props) {
  console.log(props);
  return (
    <div className="aggregate-icon-container" onClick={props.modal.open}>
      <FaComments /> {props.num_comments}
    </div>
  )
}

export default withModalAccess(CommentCount);
