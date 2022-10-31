import React from 'react';
import { Modal, Button } from 'react-daisyui';

function LoginModal() {

    return (
        <div className="font-sans">
            <Button onClick={toggleVisible}>Open Modal</Button>
            <Modal open={visible}>
                <Button
                    size="sm"
                    shape="circle"
                    className="absolute right-2 top-2"
                    onClick={toggleVisible}
                >
                    ✕
                </Button>
                <Modal.Header className="font-bold">
                    Congratulations random Interner user!
                </Modal.Header>

                <Modal.Body>
                    You've been selected for a chance to get one year of subscription to
                    use Wikipedia for free!
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LoginModal;