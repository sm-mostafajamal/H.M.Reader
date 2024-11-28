import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import MangaList from './MangaList';
import Cover from './Cover';

const GuestLayout = () => {
    
    return (
        <div>
            {/* Header */}
            <section>
                <Nav />
            </section>

            {/* Body */}
            <section>
                <Cover />
                <MangaList />
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