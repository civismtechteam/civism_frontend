import { connect } from 'react-redux'
import FactSubmission from './FactSubmission.jsx'
import { createFact } from "../../../actions/factActions.js";


const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFact: fact => dispatch(createFact({ fact, scoopId: 1 }))
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(FactSubmission)
