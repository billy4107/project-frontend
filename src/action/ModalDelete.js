import React from 'react'
import { Button, Modal } from 'react-bootstrap';

const ModalDelete = (props) => {
    const { show, deleteWorkplace, onClose } = props;

    return (
        <div>
            <Modal show={show} onHide={onClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete data?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={deleteWorkplace}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalDelete
