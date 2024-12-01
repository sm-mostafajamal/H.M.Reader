import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import MangaList from './MangaList';
import Cover from './Cover';
import Filter from './Filter';

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
                <div className='flex'>
                    <section className='w-5/6'>
                        <MangaList />
                    </section>
                    <aside className='w-1/6'>
                        <Filter />
                    </aside>
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