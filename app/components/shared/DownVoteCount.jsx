import  React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import "./AggregateIcon.scss";

export default function(props) {
  return (
    <div className="aggregate-icon-container" onClick={props.createVote} >
      <FaCaretDown /> {props.num_down_votes}
    </div>
  )
}
