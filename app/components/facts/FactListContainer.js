import { connect } from 'react-redux'
import FactList from './FactList.jsx'

const mapStateToProps = (state) => {
  return {facts: state.facts}
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FactList)
