import { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';
import Button from './Button';
import { BsSearch } from 'react-icons/bs';

const Nav = () => {
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registerModalShow, setRegisterModalShow] = useState(false);

    return (
        <>
            <nav className='w-full flex flex-row justify-between items-center pb-10 px-12'>
                <span className="text-indigo-300 text-3xl font-mono m-2 w-2/6 font-semibold cursor-pointer">{import.meta.env.VITE_APP_NAME}</span>

                <section className="flex justify-center w-2/6 cursor-pointer">
                    <span className='flex items-center font-mono text-gray-400 text-xl pb-2'>
                        <BsSearch className=''/>
                        <input className='bg-transparent ml-4 outline-none' placeholder="Search Manga..."/> 
                    </span>
                </section>
                
                
                <section className='flex justify-end w-2/6 '>
                    <Button onClick={() => setLoginModalShow(true)} text_name='Login In'/>
                    <Button onClick={() => setRegisterModalShow(true)} text_name='Register'/>
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