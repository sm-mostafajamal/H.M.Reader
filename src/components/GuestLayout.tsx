import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const GuestLayout = () => {

    return (
        <div className='p-8 w-full h-full'>
            {/* Header */}
            <section>
                <Nav />
            </section>

            {/* Body */}
            <section className='h-96 pt-16'>
                <div className='flex flex-wrap'>
                </div>
                <Outlet />
            </section>

            {/* Footer */}
            <section className='flex justify-end w-full'>
                <div className='flex flex-col justify-end'>

                </div>
            </section>
        </div>
    )
}

export default GuestLayout;