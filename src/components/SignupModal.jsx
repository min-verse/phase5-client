import React from 'react';
import { useNavigate } from 'react-router';
import SignupForm from './SignupForm';
import { Modal, Button } from 'react-daisyui';

function SignupModal({ open, toggle }){

    return (
        <Modal open={open}>
            <Button
                size="sm"
                shape="circle"
                className="absolute right-2 top-2"
                onClick={toggle}
            >
                ✕
            </Button>
            <Modal.Header className="font-bold">
                Congratulations random Interner user!
            </Modal.Header>

            <Modal.Body>
                You've been selected for a chance to get one year of subscription to
                use Wikipedia for free!
                <SignupForm />
            </Modal.Body>
        </Modal>
    );
}

export default SignupModal;