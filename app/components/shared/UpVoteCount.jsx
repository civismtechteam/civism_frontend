import  React from 'react';
import { FaCaretUp } from 'react-icons/fa';
import "./AggregateIcon.scss";

export default function(props) {
  return (
    <div className="aggregate-icon-container">
      <FaCaretUp /> {props.num_up_votes}
    </div>
  )
}
