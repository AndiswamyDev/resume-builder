import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AddItemModalInterfaces } from '../interfaces';

class AddItemModal extends React.Component<AddItemModalInterfaces> {
    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onClose}
                backdrop="static"
                keyboard={false}
                className='text-dark'
            >
                <Modal.Header>
                    <Modal.Title>{this.props.fromType}</Modal.Title>
                    <Button variant="secondary" onClick={this.props.onClose}>
                        X
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => this.props.hanldeItemsActions(true, this.props.fromType, 0)}>Add</Button>
                </Modal.Footer>
            </Modal>

        )
    }
}

export default AddItemModal;