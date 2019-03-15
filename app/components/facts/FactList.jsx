import  React from 'react'
import './FactList.css'
import FactModalContainer from './FactModalContainer.js'
import { Button } from 'react-bootstrap';

class FactList extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  // handleModal(name, event){
  //   let modals = this.state.modals;
  //
  //   if(this.state.modals.some(i => i.name === name)){
  //        let value = this.state.models.filter(f => f.name == name).map(i => i.active)[0];
  //        modals = [...modals, {name: name, open: !value}];
  //   }else{
  //        modals = [...modals, {name: name, open: true}];
  //   }
  //
  //   this.setState({modals: modals})
  // }

  render() {
    let facts = [];
    for (var i = 0; i < this.props.facts.length; i++) {
      facts.push(
        // <li key={i}>
        //   <Button
        //     variant="primary"
        //     onClick={() => this.setState({ modalShow: true })}
        //   >
        //     {this.props.facts[i].body}
        //   </Button>
        //
        //   <FactModalContainer
        //     show={this.state.modalShow}
        //     onHide={modalClose}
        //   />
        // </li>
        <li key={i}>
          {this.props.facts[i].body}
        </li>
      )
    }

    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="fact-holder">
        <ul className="dashed">{facts}</ul>
      </div>
    );
  }
}

// module.exports = App;
export default FactList
