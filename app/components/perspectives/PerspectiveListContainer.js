import { connect } from 'react-redux'
import PerspectiveList from './PerspectiveList.jsx'

const mapStateToProps = (state) => {
  return {perspectives: state.perspectives}
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(PerspectiveList)
