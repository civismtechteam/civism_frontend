import { connect } from 'react-redux'
import AuthorIcon from './AuthorIcon.jsx'

const mapStateToProps = (state, ownProps) => {
  return state.users[ownProps.userId];
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps, mergeProps
)(AuthorIcon)
