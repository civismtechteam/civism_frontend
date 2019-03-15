import  React from 'react';
import { FaComments } from 'react-icons/fa';
import "./AggregateIcon.scss";

export default function(props) {
  return (
    <div className="aggregate-icon-container">
      <FaComments /> {props.num_comments}
    </div>
  )
}
