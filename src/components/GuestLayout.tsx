import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import MangaList from './MangaList';

const GuestLayout = () => {
    return (
        <div>
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
            <section className=''>
                This is Footer
            </section>
        </div>
    )
}

export default GuestLayout;