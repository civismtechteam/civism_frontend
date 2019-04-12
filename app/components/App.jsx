import React from 'react'
import ScoopHeaderContainer from './scoops/ScoopHeaderContainer.js'
import HeaderContainer from './header/HeaderContainer.js'
import FactListContainer from './facts/FactListContainer.js'
import PerspectiveListContainer from './perspectives/PerspectiveListContainer.js'
import CivismModalContainer from './shared/CivismModalContainer.js'
import Modal from "react-modal";
import { bindAll } from "underscore";

import { ModalContext } from "../context/ModalContext.js"

Modal.setAppElement('#app');

class App extends React.Component {
  constructor(props) {
    super(props)
    bindAll(this, "openModal", "closeModal");
    this.state = {
      modalIsOpen: false,
      resource: '',
      id: -1
    };
  }

  componentDidMount() {
    this.props.fetchInitialState();
  }

  openModal({ resource, id, comments }) {
    this.setState({modalIsOpen: true, resource: resource, id: id});
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
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} >
          <CivismModalContainer resource={this.state.resource} id={this.state.id}/>
        </Modal>
        <ModalContext.Provider value={modalOptions}>
          <HeaderContainer />
          <ScoopHeaderContainer />
          <FactListContainer />
          <PerspectiveListContainer />
        </ ModalContext.Provider>
      </div>
    );
  }
}

// module.exports = App;
export default App
