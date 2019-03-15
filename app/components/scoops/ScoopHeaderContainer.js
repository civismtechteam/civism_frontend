import { connect } from 'react-redux'
import ScoopHeader from './ScoopHeader.jsx'

const mapStateToProps = (state) => {
  return state.scoop
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ScoopHeader)
