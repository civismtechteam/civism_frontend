import { connect } from 'react-redux'
import { fetchInitialState } from '../actions/stateActions.js'
import App from './App.jsx'

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInitialState: () => { dispatch(fetchInitialState()) }
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App)
