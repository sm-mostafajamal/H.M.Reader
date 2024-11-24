import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TModalProps } from '../../utilities/Types';

const RegisterModal = ({ show, onHide }: TModalProps) => {   
    
    return (
        <Modal show={show} aria-labelledby="registered" backdrop="static" centered>
            <Modal.Header>
                <Modal.Title id="login-title">Register</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control type="email" id="email"/>

                <Form.Label htmlFor="username" className='pt-4'>Username</Form.Label>
                <Form.Control type="text" id="username" />

                <Form.Label htmlFor="password" className='pt-4'>Password</Form.Label>
                <Form.Control type="password" id="password"/>

                <Form.Label htmlFor="confirm_password" className='pt-4'>Confirm Password</Form.Label>
                <Form.Control type="password" id="password"/>
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>Close</Button>
                <Button variant="dark" onClick={onHide}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterModal;