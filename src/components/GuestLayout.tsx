import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import MangaList from './MangaList';
import Cover from './Cover';
import Filter from './Filter';
import MangaStates from './MangaStates';
import Footer from './Footer';

const GuestLayout = () => {
    
    return (
        <div>
            {/* Header */}
            <section>
                <Nav />
            </section>

            {/* Body */}
            <section className='my-10'>
                <Cover />
                <div className='flex my-20'>
                    <section className='w-5/6'>
                        <MangaList />
                    </section>
                    <aside className='w-1/6'>
                        <Filter />
                    </aside>
                </div>
                <MangaStates />
                <Outlet />
            </section>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default GuestLayout;