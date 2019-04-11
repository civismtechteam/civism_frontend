import { connect } from 'react-redux'
import FactModal from './FactModal.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    // facts: state.facts,
    fact: state.facts.find(fact => fact.id === ownProps.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FactModal)
