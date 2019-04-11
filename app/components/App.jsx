import React from 'react'
import ScoopHeaderContainer from './scoops/ScoopHeaderContainer.js'
import HeaderContainer from './header/HeaderContainer.js'
import FactListContainer from './facts/FactListContainer.js'
import PerspectiveListContainer from './perspectives/PerspectiveListContainer.js'
import FactSubmissionContainer from './factSubmission/FactSubmissionContainer.js'
import FactModalContainer from "./facts/FactModalContainer.js"
import Modal from "react-modal";
import { bindAll } from "underscore";

import { ModalContext } from "../context/ModalContext.js"

Modal.setAppElement('#app');

class App extends React.Component {
  constructor(props) {
    super(props)
    bindAll(this, "openModal", "closeModal");
    this.state = {
      modalIsOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchInitialState();
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const modalOptions = {
      isOpen: this.state.modalIsOpen,
      open: this.openModal,
      close: this.closeModal
    }

    return (
      <div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
          <FactModalContainer />
        </Modal>
        <ModalContext.Provider value={modalOptions}>
          <HeaderContainer />
          <ScoopHeaderContainer />
          <FactListContainer />
          <FactSubmissionContainer />
          <PerspectiveListContainer />
        </ ModalContext.Provider>
      </div>
    );
  }
}

// module.exports = App;
export default App
