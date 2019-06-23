import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class UserCard extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return (

      <div className="col-md-3">
        <div className="card" onClick={this.handleShow}>
          <p className="name">{this.props.name}</p>
          <div className="divImage">
            <img className="image_organisation" src={this.props.url}></img>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="image_organisation" src={this.props.url}></img>
            <p>{this.props.followers}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}



export default UserCard;
