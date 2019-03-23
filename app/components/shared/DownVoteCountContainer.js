import { connect } from 'react-redux';
import DownVoteCount from './DownVoteCount.jsx';
import { createVote } from "../../actions/voteActions";

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, resource } = ownProps;
  return {
    createVote: () => dispatch(createVote({ id, resource, direction: -1 }))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(DownVoteCount)
