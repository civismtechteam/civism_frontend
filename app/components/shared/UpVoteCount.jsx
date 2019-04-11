import  React from 'react';
import { FaCaretUp } from 'react-icons/fa';
import "./AggregateIcon.scss";
import "./UpVoteCount.css";

export default function(props) {
  return (
    <div className="aggregate-icon-container" onClick={props.createVote} >
      <FaCaretUp /> {props.num_up_votes}
    </div>
  )
}
