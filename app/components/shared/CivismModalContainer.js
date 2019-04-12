import { connect } from 'react-redux'
import CivismModal from './CivismModal.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    // facts: state.facts,
    fact: state.facts.find(fact => fact.id === ownProps.id),
    perspective: state.perspectives.find(perspective => perspective.id === ownProps.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(CivismModal)
