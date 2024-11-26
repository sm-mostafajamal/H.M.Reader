import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import MangaList from './MangaList';

const GuestLayout = () => {
    return (
        <div className='w-full h-screen'>
            {/* Header */}
            <section>
                <Nav />
            </section>

            {/* Body */}
            <section>
                <div className='flex flex-wrap justify-center'>
                    <MangaList />
                </div>
                <Outlet />
            </section>

            {/* Footer */}
            <section className='h-24 bg-black'>
                This is Footer
            </section>
        </div>
    )
}

export default GuestLayout;