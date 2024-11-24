import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';

const Nav = () => {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registerModalShow, setRegisterModalShow] = useState(false);

    return (
        <>
            <nav className='w-full flex flex-row justify-between items-center'>
                <section className="mx-16">
                    <Link to="/">
                        search
                    </Link>
                </section>
                
                <span className="text-center shadow-inner shadow-sm font-semibold tracking-widest rounded w-80 p-2 cursor-pointer">{import.meta.env.VITE_APP_NAME}</span>
                
                <section className='flex justify-around '>
                    <Button
                        variant="outline-dark"
                        onClick={() => setLoginModalShow(true)}
                        className="shadow-inner shadow-md font-medium tracking-widest px-4 mr-4">
                        Login In
                    </Button>
                    <Button 
                        variant="outline-dark"
                        onClick={() => setRegisterModalShow(true)}
                        className="shadow-inner shadow-md font-medium tracking-widest px-4">
                        Register
                    </Button>
                </section>
            </nav>
            <section>
                <LoginModal 
                        show={loginModalShow} 
                        onHide={() => setLoginModalShow(false)}  
                        registerModalShow={registerModalShow} 
                        setRegisterModalShow={setRegisterModalShow}
                        brand_name={import.meta.env.VITE_APP_NAME}
                    />
                <RegisterModal show={registerModalShow} onHide={() => setRegisterModalShow(false)}/>
            </section>
        </>
    )
}

export default Nav