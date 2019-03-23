import { connect } from 'react-redux';
import UpVoteCount from './UpVoteCount.jsx';
import { createVote } from "../../actions/voteActions";

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, resource } = ownProps;
  return {
    createVote: () => dispatch(createVote({ id, resource, direction: 1 }))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(UpVoteCount)
