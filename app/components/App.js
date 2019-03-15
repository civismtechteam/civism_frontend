import React from 'react'
import ScoopHeaderContainer from './scoops/ScoopHeaderContainer.js'
import HeaderContainer from './header/HeaderContainer.js'
import FactListContainer from './facts/FactListContainer.js'
import PerspectiveListContainer from './perspectives/PerspectiveListContainer.js'
import FactSubmissionContainer from './factSubmission/FactSubmissionContainer.js'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchInitialState();
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <ScoopHeaderContainer />
        <FactListContainer />
        <FactSubmissionContainer />
        <PerspectiveListContainer />
      </div>
    );
  }
}

// module.exports = App;
export default App
