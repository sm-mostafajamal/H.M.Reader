import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import RegisterModal from './RegisterModal';
import { ILoginModalProps } from '../../utilities/Interfaces';


const LoginModal = ({ show, onHide, registerModalShow, setRegisterModalShow, brand_name}: ILoginModalProps) => {
        
    return (
        <Modal show={show} aria-labelledby="login" backdrop="static" centered>
            <Modal.Header>
                <Modal.Title id="login-title">LOG IN</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="username">Username</Form.Label>
                <Form.Control type="text" id="username" />

                <section className='flex justify-between pt-4'>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Link to='link' className='pl-2 no-underline'>Forgot Password?</Link>
                </section>
                <Form.Control type="password" id="password"/>

                <Form.Label className='pt-4'>
                    New to {brand_name}? 
                    <Link className='pl-2 no-underline' to="#" onClick={() => setRegisterModalShow(true)}>Create an account</Link>
                    <RegisterModal show={registerModalShow} onHide={() => setRegisterModalShow(false)}/>
                </Form.Label>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="light" onClick={onHide}>Close</Button>
                <Button variant="dark" onClick={onHide}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;