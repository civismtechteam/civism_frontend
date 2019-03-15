import { connect } from 'react-redux'
import FactModal from './FactModal.jsx'

const mapStateToProps = (state) => {
  return {
    facts: state.facts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FactModal)
